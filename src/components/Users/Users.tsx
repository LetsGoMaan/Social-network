import React from "react";
import {UsersType} from "../../redux/users-reducer";
import {Paginator} from "../common/Paginator/Paginator";
import User from "./User";

type UsersPropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    followingInProgress: Array<number>
    onPageChanged: (pageNumber: number) => void
    followSuccess: (userId: number) => void
    unfollowSuccess: (userId: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}


const Users = (props: UsersPropsType) => {

    return (
        <div>
            <Paginator  currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                       totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}/>
            {props.users.map(u => <User
                user={u}
                followingInProgress={props.followingInProgress}
                key={u.id}
                unfollow={props.unfollow}
                follow={props.follow}/>
            )}
        </div>
    );
};
export default Users;