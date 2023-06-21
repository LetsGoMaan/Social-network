import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {SetInitializedType} from "./app-reducer";

const SET_USER_DATA = "SET_USER_DATA"

type AuthDataType = {
    userId: number | null
    email: string
    login: string
    isAuth: boolean
}

type SetUserDataType = {
    type: "SET_USER_DATA"
    payload: AuthDataType
}



export type AuthActionsType = SetUserDataType | SetInitializedType

let initialState = {
    userId: '' ,
    email: '',
    login: '',
    isAuth: false
}
export type InitialStateType = typeof initialState

const authReducer = (state:InitialStateType = initialState , action:AuthActionsType):InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            } as unknown as InitialStateType
        default:
            return state

    }

}

export const setAuthUserData = (userId: number | null, email: string, login: string, isAuth:boolean): AuthActionsType => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        }

    }
}


export const getAuthUserData = () => {
    return (dispatch: Dispatch<AuthActionsType>) => {
        authAPI.authMe()
            .then(response => {
            if(response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: any) => {
        authAPI.login(email, password, rememberMe, ).then(response => {
            if(response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
                dispatch(stopSubmit("login", {_error: message}))
            }
        })
    }
}

export const logout = () => {
    return (dispatch: Dispatch<AuthActionsType>) => {
        authAPI.logOut().then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, '', '', false))
            }
        })
    }
}

export default authReducer