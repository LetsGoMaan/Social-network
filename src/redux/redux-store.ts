import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import {ProfileType} from "../components/Profile/ProfileContainer";
import authReducer from "./auth-reducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userPage: usersReducer,
    auth: authReducer
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

type SetUserProfileAT = {
    type: "SET_USER_PROFILE"
    profile: ProfileType
}

export type ActionsType =
    AddPostActionType
    | AddMessageActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageTextActionType
    | SetUserProfileAT

export type AppStateType = ReturnType<typeof rootReducer>

export type StoreType = ReturnType<typeof createStore>

let store: StoreType = createStore(rootReducer)

export default store;