import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionsType} from "./profile-reducer";
import dialogsReducer, {DialogsActionsType} from "./dialogs-reducer";
import usersReducer, {UsersActionsType} from "./users-reducer";
import authReducer, {AuthActionsType} from "./auth-reducer";
import thunkMiddleWare from 'redux-thunk'


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userPage: usersReducer,
    auth: authReducer
});



export type AppActionsType = AuthActionsType | DialogsActionsType | ProfileActionsType | UsersActionsType


export type AppStateType = ReturnType<typeof rootReducer>

export type StoreType = ReturnType<typeof createStore>

let store: StoreType = createStore(rootReducer, applyMiddleware(thunkMiddleWare))

export default store;