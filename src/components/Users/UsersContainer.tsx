import {Users} from "./Users";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";

export type MapStatePropsType = {
    users: Array<UsersType>
}

export type MapDispatchProps = {
    follow: (userId:number) => void
    unfollow: (userId:number) => void
    setUsers: (users:Array<UsersType>) => void
}

let mapStateToProps = (state:AppStateType) : MapStatePropsType => {
    return {
       users: state.userPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchProps => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}



export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);