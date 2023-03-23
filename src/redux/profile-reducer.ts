import {ActionsType} from "./state";
import {ProfilePageType} from "../App";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const profileReducer = (state:ProfilePageType, action:ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }
            state.posts.push(newPost)
            state.newPostText = ""
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
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

export default profileReducer