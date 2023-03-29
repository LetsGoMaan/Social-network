import {ActionsType} from "./redux-store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

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
    isFetching: false
    //     [
    //     {id: 1, photoUrl: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png", followed: false, fullName: "Dmitry", status: "I am a boss", location: {city: "Minsk", country: "Belarus"}},
    //     {id: 2, photoUrl: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png", followed: true, fullName: "Andrew", status: "I am a boss too", location: {city: "Moscow", country: "Russia"}},
    //     {id: 3, photoUrl: "https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png", followed: false, fullName: "Veronika", status: "I am a CEO", location: {city: "Kiev", country: "Ukraine"}},
    // ]as Array<UsersType>,
}

export type InitialStateType = typeof initialState

const userReducer = (state:InitialStateType = initialState , action:ActionsType):InitialStateType => {

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

        default:
            return state

    }

}

export const follow = (userId: number): ActionsType => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollow = (userId: number): ActionsType => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsers = (users: Array<UsersType>): ActionsType => {
    return {
        type: SET_USERS,
        users
    }
}
export const setCurrentPage = (currentPage: number): ActionsType => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}
export const setTotalUsersCount = (totalUsersCount: number): ActionsType => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    }
}
export const toggleIsFetching = (isFetching:boolean): ActionsType => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching
    }
}


export default userReducer