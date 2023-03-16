import {StateType} from "../App";

const store = {
    _state: {


        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you", likesCount: 5},
                {id: 2, message: "It's my first post", likesCount: 10},
                {id: 3, message: "It's my first post", likesCount: 10},
                {id: 4, message: "It's my first post", likesCount: 10},
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Natasha"},
                {id: 4, name: "Sveta"},
                {id: 5, name: "Sasha"},
                {id: 6, name: "Valera"},
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Kavabanga"},
                {id: 5, message: "IlikeSeik"},
                {id: 6, message: "YOLO"},
            ],
            newMessageText: ""
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber(state: StateType) {
        console.log("state changed")
    },

    addPost() {

        const newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this._callSubscriber(this._state)
    },
    addMessage() {

        const newPost = {
            id: 5,
            message: this._state.dialogsPage.newMessageText,
        }

        this._state.dialogsPage.messages.push(newPost)
        this._state.dialogsPage.newMessageText = ""
        this._callSubscriber(this._state)
    },

    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    updateNewMessageText(newText: string) {
        this._state.dialogsPage.newMessageText = newText
        this._callSubscriber(this._state)
    },

    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer
    },
}

// let rerenderEntireTree = (state: StateType) => {
//     console.log("state changed")
// }
//
// let state = {
//
//
//     profilePage: {
//         posts: [
//             {id: 1, message: "Hi, how are you", likesCount: 5},
//             {id: 2, message: "It's my first post", likesCount: 10},
//             {id: 3, message: "It's my first post", likesCount: 10},
//             {id: 4, message: "It's my first post", likesCount: 10},
//         ],
//         newPostText: ""
//     },
//     dialogsPage: {
//         dialogs: [
//             {id: 1, name: "Dimych"},
//             {id: 2, name: "Andrey"},
//             {id: 3, name: "Natasha"},
//             {id: 4, name: "Sveta"},
//             {id: 5, name: "Sasha"},
//             {id: 6, name: "Valera"},
//         ],
//         messages: [
//             {id: 1, message: "Hi"},
//             {id: 2, message: "How are you"},
//             {id: 3, message: "Yo"},
//             {id: 4, message: "Kavabanga"},
//             {id: 5, message: "IlikeSeik"},
//             {id: 6, message: "YOLO"},
//         ],
//         newMessageText: ""
//     }
// }
//
// export const addPost = () => {
//
//     const newPost = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: 0,
//     }
//
//     state.profilePage.posts.push(newPost)
//     state.profilePage.newPostText = ""
//     rerenderEntireTree(state)
// }
// export const addMessage = () => {
//
//     const newPost = {
//         id: 5,
//         message: state.dialogsPage.newMessageText,
//     }
//
//     state.dialogsPage.messages.push(newPost)
//     state.dialogsPage.newMessageText = ""
//     rerenderEntireTree(state)
// }
//
// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText
//     rerenderEntireTree(state)
// }
// export const updateNewMessageText = (newText: string) => {
//     state.dialogsPage.newMessageText = newText
//     rerenderEntireTree(state)
// }
//
// export const subscribe = (observer: (state: StateType) => void) => {
//     rerenderEntireTree = observer
// }

export default store