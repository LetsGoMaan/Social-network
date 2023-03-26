import {UsersType} from "../../redux/users-reducer";
import styles from "./Users.module.css"
import axios from "axios";
import userPhoto from '../../assets/images/user.png'
type UsersPropsType = {
    users: Array<UsersType>
    follow: (userId:number) => void
    unfollow: (userId:number) => void
    setUsers: (users:Array<UsersType>) => void
}


export const Users = (props:UsersPropsType) => {
        if(props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger
                props.setUsers(response.data.items)
            })
        }
        //     props.setUsers( [
        //         {id: 1, photoUrl: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png", followed: false, fullName: "Dmitry", status: "I am a boss", location: {city: "Minsk", country: "Belarus"}},
        //         {id: 2, photoUrl: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png", followed: true, fullName: "Andrew", status: "I am a boss too", location: {city: "Moscow", country: "Russia"}},
        //         {id: 3, photoUrl: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png", followed: false, fullName: "Veronika", status: "I am a CEO", location: {city: "Kiev", country: "Ukraine"}},])
        // }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.userPhoto} src={u.photos.small  ? u.photos.small : userPhoto} alt={"userPhoto"}/>
                        </div>
                        <div>
                            {u.followed? <button onClick={()=> {props.unfollow(u.id)}}>Unfollow</button> : <button onClick={()=> {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}