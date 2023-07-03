import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {SetInitializedType} from "./app-reducer";

const SET_USER_DATA = "auth/SET_USER_DATA"
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS"

type AuthDataType = {
    userId: number | null
    email: string
    login: string
    isAuth: boolean
    captchaUrl?: null
}

type SetUserDataType = {
    type: "auth/SET_USER_DATA"
    payload: AuthDataType
}

type GetCaptchaUrlSuccess = {
    type: "auth/GET_CAPTCHA_URL_SUCCESS"
    payload: {
        captchaUrl: string
    }
}


export type AuthActionsType = SetUserDataType | SetInitializedType | GetCaptchaUrlSuccess

let initialState = {
    userId: "",
    email: "",
    login: "",
    isAuth: false,
    captchaUrl: null
}
export type InitialStateType = typeof initialState

const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            } as unknown as InitialStateType
        default:
            return state

    }

}

export const setAuthUserData = (userId: number | null, email: string, login: string, isAuth: boolean): AuthActionsType => {
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

export const getCaptchaUrlSuccess = (captchaUrl: string): AuthActionsType => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        payload: {captchaUrl}
    }
}


export const getAuthUserData = () => {
    return async (dispatch: Dispatch<AuthActionsType>) => {
        let response = await authAPI.authMe()
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => {
    return async (dispatch: any) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error: message}))
        }
    }
}

export const getCaptchaUrl = () => {
    return async (dispatch: any) => {

        const response = await securityAPI.getCaptchaUrl()
        const captchaUrl = response.data.url
        dispatch(getCaptchaUrlSuccess(captchaUrl))
    }
}


export const logout = () => {
    return async (dispatch: Dispatch<AuthActionsType>) => {
        let response = await authAPI.logOut()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, "", "", false))
        }
    }
}

export default authReducer