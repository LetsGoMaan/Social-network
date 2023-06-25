import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UsersType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type PropsType = {
    user: UsersType
    followingInProgress: Array<number>
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}


const Users = ({user, followingInProgress, follow, unfollow}: PropsType) => {

    return (
        <div>
                <span>
                <div>
                    <NavLink to={"/profile/" + user.id}>
                <img className={styles.userPhoto} src={user.photos.small ? user.photos.small : userPhoto}
                     alt={"userPhoto"}/>
                        </NavLink>
                </div>
                <div>
            {user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => {
                              unfollow(user.id)
                          }}>Unfollow</button>

                : <button disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => {
                              follow(user.id)
                          }}>Follow</button>}
                </div>
                </span>
            <span>
                <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
                </span>
                <span>
                <div>{"user.location.country"}</div>
                <div>{"user.location.city"}</div>
                </span>
                </span>
        </div>
    )
}


export default Users;