import {ActionsType} from "./store";
import {ProfilePageType} from "../App";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 5},
        {id: 2, message: "It's my first post", likesCount: 10},
        {id: 3, message: "It's my first post", likesCount: 10},
        {id: 4, message: "It's my first post", likesCount: 10},
    ],
    newPostText: ""
}

const profileReducer = (state:ProfilePageType = initialState , action:ActionsType):ProfilePageType => {

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