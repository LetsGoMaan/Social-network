import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfileActionsType} from "./profile-reducer";
import dialogsReducer, {DialogsActionsType} from "./dialogs-reducer";
import usersReducer, {UsersActionsType} from "./users-reducer";
import authReducer, {AuthActionsType} from "./auth-reducer";
import thunkMiddleWare from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    userPage: usersReducer,
    auth: authReducer,
    form: formReducer
});



export type AppActionsType = AuthActionsType | DialogsActionsType | ProfileActionsType | UsersActionsType


export type AppStateType = ReturnType<typeof rootReducer>

export type StoreType = ReturnType<typeof createStore>

let store: StoreType = createStore(rootReducer, applyMiddleware(thunkMiddleWare))

//@ts-ignore
window.store = store.getState()

export default store;