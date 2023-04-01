import {userAPI} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

type FollowAT = {
    type: "FOLLOW"
    userId: number
}
type UnfollowAT = {
    type: "UNFOLLOW"
    userId: number
}
type SetUsersAT = {
    type: "SET_USERS"
    users: Array<UsersType>
}
type SetCurrentPageAT = {
    type: "SET_CURRENT_PAGE",
    currentPage: number
}
type SetUsersTotalCountAT = {
    type: "SET_TOTAL_USERS_COUNT",
    totalUsersCount: number
}
type ToggleIsFetchingAT = {
    type: "TOGGLE_IS_FETCHING",
    isFetching: boolean
}
type toggleFollowingProgressAT = {
    type: "TOGGLE_IS_FOLLOWING_PROGRESS",
    isFetching: boolean,
    userId: number
}

export type UsersActionsType = FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | SetUsersTotalCountAT
    | ToggleIsFetchingAT
    | toggleFollowingProgressAT

type LocationType = {
    city: string,
    country: string
}
type PhotosType = {
    "small": string,
    "large": string
}
export type UsersType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: LocationType
}

let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
    //     [
    //     {id: 1, photoUrl: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png", followed: false, fullName: "Dmitry", status: "I am a boss", location: {city: "Minsk", country: "Belarus"}},
    //     {id: 2, photoUrl: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png", followed: true, fullName: "Andrew", status: "I am a boss too", location: {city: "Moscow", country: "Russia"}},
    //     {id: 3, photoUrl: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png", followed: false, fullName: "Veronika", status: "I am a CEO", location: {city: "Kiev", country: "Ukraine"}},
    // ]as Array<UsersType>,
}

export type InitialStateType = typeof initialState

const userReducer = (state: InitialStateType = initialState, action: UsersActionsType): InitialStateType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)}

        default:
            return state

    }

}

export const followSuccess = (userId: number): UsersActionsType => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollowSuccess = (userId: number): UsersActionsType => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsers = (users: Array<UsersType>): UsersActionsType => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentPage = (currentPage: number): UsersActionsType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
export const setTotalUsersCount = (totalUsersCount: number): UsersActionsType => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    }
}
export const toggleIsFetching = (isFetching: boolean): UsersActionsType => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): UsersActionsType => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
}

export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleIsFetching(true));

        userAPI.getUsers(currentPage,pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        });
    }
}

export const follow = (userId: number) => {
    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleFollowingProgress(true, userId))
        userAPI.follow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false,userId))
        })
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: Dispatch<UsersActionsType>) => {
        dispatch(toggleFollowingProgress(true, userId))
        userAPI.unfollow(userId).then(data => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false,userId))
        })
    }
}


export default userReducer