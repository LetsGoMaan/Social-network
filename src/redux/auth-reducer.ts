import {Dispatch} from "redux";
import {authAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA"

type AuthDataType = {
    userId: number | null
    email: string
    login: string
}
type SetUserDataType = {
    type: "SET_USER_DATA"
    data: AuthDataType
}

export type AuthActionsType = SetUserDataType

let initialState = {
    id: null,
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
                ...action.data,
                isAuth: true
            }
        default:
            return state

    }

}

export const setAuthUserData = (userId: number, email: string, login: string): AuthActionsType => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login
        }

    }
}

export const getAuthUserData = () => {
    return (dispatch: Dispatch<AuthActionsType>) => {
        authAPI.authMe().then(response => {
            if(response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
    }
}

export default authReducer