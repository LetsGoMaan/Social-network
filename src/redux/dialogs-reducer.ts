const ADD_MESSAGE = "ADD-MESSAGE"


export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

type AddMessageActionType = {
    type: "ADD-MESSAGE"
    newMessageText: string
}
type UpdateNewMessageTextActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newText: string
}

export type DialogsActionsType = AddMessageActionType | UpdateNewMessageTextActionType

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Natasha"},
        {id: 4, name: "Sveta"},
        {id: 5, name: "Sasha"},
        {id: 6, name: "Valera"},
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Yo"},
        {id: 4, message: "Kavabanga"},
        {id: 5, message: "IlikeSeik"},
        {id: 6, message: "YOLO"},
    ] as Array<MessagesType>,
}

export type InitialStateType = typeof initialState

export const dialogsReducer = (state: InitialStateType = initialState, action:DialogsActionsType):InitialStateType => {


    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 5,
                message: action.newMessageText,
            }
            return  {
                ...state,
                messages: [...state.messages, newMessage],

            }
        default:
            return state
    }
}

export const addMessageActionCreator = (newMessageText: string): DialogsActionsType => {
    return {
        type: ADD_MESSAGE,
        newMessageText
    }
}


export default dialogsReducer