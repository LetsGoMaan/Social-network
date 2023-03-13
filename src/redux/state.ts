import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you", likesCount: 5},
            {id: 2, message: "It's my first post", likesCount: 10},
            {id: 3, message: "It's my first post", likesCount: 10},
            {id: 4, message: "It's my first post", likesCount: 10},
        ],
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
        ]
    }
}

export const addPost = (postMessage: string) => {

    const newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    }

    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export default state