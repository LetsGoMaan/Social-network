import {ActionsType} from "./redux-store";
import {ProfileType} from "../components/Profile/ProfileContainer";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

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

}

export type InitialStateType = typeof initialState

const profileReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {


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

export const addPostActionCreator = (): ActionsType => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (newText: string): ActionsType => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    }
}

export const setUserProfile = (profile: ProfileType): ActionsType => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}



export default profileReducer