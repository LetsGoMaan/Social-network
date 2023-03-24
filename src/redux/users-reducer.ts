import {ActionsType} from "./redux-store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

type LocationType = {
    city: string,
    country: string
}

export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: LocationType
}

let initialState = {
    users: [] as Array<UsersType>
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
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state

    }
// пофиксить any

}

export const followAC = (userId: number): ActionsType => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unfollowAC = (userId: number): ActionsType => {
    return {
        type: UNFOLLOW,
        userId
    }
}

export const setUsersAC = (users: Array<UsersType>): ActionsType => {
    return {
        type: SET_USERS,
        users
    }
}
export default userReducer