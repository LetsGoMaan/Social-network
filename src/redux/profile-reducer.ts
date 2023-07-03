import {PhotosType, ProfileType} from "../components/Profile/ProfileContainer";
import {Dispatch} from "redux";
import {profileAPI, userAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const DELETE_POST = "DELETE_POST"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

type AddPostActionType = {
    type: "ADD-POST"
    newPostText: string
}

type SetUserProfileAT = {
    type: "SET_USER_PROFILE"
    profile: ProfileType
}
type SetStatusAT = {
    type: "SET_STATUS"
    status: string
}

type DeletePostAT = {
    type: "DELETE_POST"
    postId: number
}

type SavePhotoAT = {
    type: "SAVE_PHOTO_SUCCESS"
    photos: PhotosType
}

export type ProfileActionsType = AddPostActionType | SetUserProfileAT | SetStatusAT | DeletePostAT | SavePhotoAT

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 5},
        {id: 2, message: "It's my first post", likesCount: 10},
        {id: 3, message: "It's my first post", likesCount: 10},
        {id: 4, message: "It's my first post", likesCount: 10},
    ] as Array<PostsType>,
    profile: {
        photos: {
            small: "",
            large: ""
        },
        fullName: "",
        aboutMe: "",
        lookingForAJob: true,
        lookingForAJobDescription: "yolo",
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        }
    },
    status: ""

}

export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ProfileActionsType): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],

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

        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
               profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText: string): ProfileActionsType => {
    return {
        type: ADD_POST,
        newPostText
    }
}

export const setStatus = (status: string): ProfileActionsType => {
    return {
        type: SET_STATUS,
        status
    }
}
export const deletePost = (postId: number): ProfileActionsType => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos: PhotosType): ProfileActionsType => ({type: SAVE_PHOTO_SUCCESS, photos})
export const setUserProfile = (profile: ProfileType): ProfileActionsType => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export const getUserProfile = (userId: string) => {
    return async (dispatch: Dispatch<ProfileActionsType>) => {
        let response = await userAPI.getProfile(userId)
        dispatch(setUserProfile(response.data))
    }
}

export const getStatus = (userId: string) => {
    return async (dispatch: Dispatch<ProfileActionsType>) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
    }
}

export const updateStatus = (status: string) => {
    return async (dispatch: Dispatch<ProfileActionsType>) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

export const savePhoto = (file: File) => {
    return async (dispatch: Dispatch<ProfileActionsType>) => {
        let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos))
        }
    }
}

export const saveProfile = (profile:ProfileType) => {
    return async (dispatch:any, getState:any) => {
        const {userId} = getState().auth

        let response = await profileAPI.saveProfile(profile)
        if (response.data.resultCode === 0) {
            dispatch(getUserProfile(userId))
        } else {
            dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
            return Promise.reject(response.data.messages[0])
        }
    }
}



export default profileReducer