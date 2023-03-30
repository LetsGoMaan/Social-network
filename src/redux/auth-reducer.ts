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

type ActionsType = SetUserDataType

let initialState = {
    id: null,
    email: '',
    login: '',
    isAuth: false
}
export type InitialStateType = typeof initialState

const authReducer = (state:InitialStateType = initialState , action:ActionsType):InitialStateType => {

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

export const setAuthUserData = (userId: number, email: string, login: string): ActionsType => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login
        }

    }
}

export default authReducer