import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    followSuccess,
    getUsers,
    setCurrentPage,
    toggleFollowingProgress, unfollow,
    unfollowSuccess,
    UsersType
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

export type MapStatePropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
export type MapDispatchProps = {
    followSuccess: (userId: number) => void
    unfollowSuccess: (userId: number) => void
    // setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    // setTotalUsersCount: (totalCount: number) => void
    // toggleIsFetching: (isFetching: boolean) => void
    // toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    follow: (userId: number) => void
    unfollow: (userId: number) => void
}

export type UsersContainerType = MapStatePropsType & MapDispatchProps


class UsersContainer extends React.Component<UsersContainerType> {

    // constructor(props:UsersPropsType) {
    //     super(props);
    //
    // }
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        //  this.props.toggleIsFetching(true)
        // userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //          this.props.toggleIsFetching(false)
        //          this.props.setUsers(data.items)
        //          this.props.setTotalUsersCount(data.totalCount)
        //      })
    }

    onPageChanged = (pageNumber: number) => {
        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)
        // userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //         this.props.setUsers(data.items)
        //         this.props.toggleIsFetching(false)
        //     })
        this.props.getUsers(pageNumber, this.props.pageSize)
    }
    //     props.setUsers( [
    //         {id: 1, photoUrl: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png", followed: false, fullName: "Dmitry", status: "I am a boss", location: {city: "Minsk", country: "Belarus"}},
    //         {id: 2, photoUrl: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png", followed: true, fullName: "Andrew", status: "I am a boss too", location: {city: "Moscow", country: "Russia"}},
    //         {id: 3, photoUrl: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png", followed: false, fullName: "Veronika", status: "I am a CEO", location: {city: "Kiev", country: "Ukraine"}},])
    // }
    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users users={this.props.users}
                       pageSize={this.props.pageSize}
                       totalUsersCount={this.props.totalUsersCount}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       followSuccess={this.props.followSuccess}
                       unfollowSuccess={this.props.unfollowSuccess}
                       followingInProgress={this.props.followingInProgress}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                />
            </>

        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followingInProgress: state.userPage.followingInProgress
    }
}
// let mapDispatchToProps = (dispatch: Dispatch): MapDispatchProps => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//     }
//     }
// }


export default withAuthRedirect(connect(mapStateToProps, {
    followSuccess,
    unfollowSuccess,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
    follow,
    unfollow

})(UsersContainer));