import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});

type AddPostActionType = {
    type: "ADD-POST"
}
type AddMessageActionType = {
    type: "ADD-MESSAGE"
}
type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}
type UpdateNewMessageTextActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newText: string
}

export type ActionsType =
    AddPostActionType
    | AddMessageActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageTextActionType

export type AppStateType = ReturnType<typeof rootReducer>

export type StoreType = ReturnType<typeof createStore>

let store:StoreType = createStore(rootReducer)

export default store;