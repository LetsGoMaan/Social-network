import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer, {UsersType} from "./users-reducer";
import {ProfileType} from "../components/Profile/ProfileContainer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userPage: usersReducer
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
type FollowAT = {
    type: "FOLLOW"
    userId: number
}
type UnfollowAT = {
    type: "UNFOLLOW"
    userId: number
}
type SetUsersAT = {
    type: "SET_USERS"
    users: Array<UsersType>
}
type SetCurrentPageAT = {
    type: "SET_CURRENT_PAGE",
    currentPage: number
}
type SetUsersTotalCountAT = {
    type: "SET_TOTAL_USERS_COUNT",
    totalUsersCount: number
}
type ToggleIsFetchingAT = {
    type: "TOGGLE_IS_FETCHING",
    isFetching: boolean
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
    | FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | SetUsersTotalCountAT
    | ToggleIsFetchingAT
    | SetUserProfileAT

export type AppStateType = ReturnType<typeof rootReducer>

export type StoreType = ReturnType<typeof createStore>

let store: StoreType = createStore(rootReducer)

export default store;