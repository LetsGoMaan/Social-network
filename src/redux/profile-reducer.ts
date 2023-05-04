import {ProfileType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {profileAPI, userAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

type AddPostActionType = {
    type: "ADD-POST"
}
type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
type SetUserProfileAT = {
    type: "SET_USER_PROFILE"
    profile: ProfileType
}
type SetStatusAT = {
    type: "SET_STATUS"
    status: string
}

export type ProfileActionsType = AddPostActionType | UpdateNewPostTextActionType | SetUserProfileAT | SetStatusAT

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 5},
        {id: 2, message: "It's my first post", likesCount: 10},
        {id: 3, message: "It's my first post", likesCount: 10},
        {id: 4, message: "It's my first post", likesCount: 10},
    ] as Array<PostsType>,
    newPostText: "",
    profile: {
        photos: {
            small: '',
            large: ''
        },
        fullName: '',
        aboutMe: ''
    },
    status: ""

}

export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {


    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = (): ProfileActionsType => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (newText: string): ProfileActionsType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
}
export const setStatus = (status: string): ProfileActionsType => {
    return {
        type: SET_STATUS,
        status
    }
}
export const setUserProfile = (profile: ProfileType): ProfileActionsType => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const getUserProfile = (userId: string) => {
    return (dispatch: Dispatch<ProfileActionsType>) => {
        userAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export const getStatus = (userId: string) => {
    return (dispatch: Dispatch<ProfileActionsType>) => {
        profileAPI.getProfile(userId).then(response => {
            dispatch(setStatus(response.data))
        })
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch<ProfileActionsType>) => {
        profileAPI.updateStatus(status).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }

        })
    }
}



export default profileReducer