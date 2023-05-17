import {AuthActionsType, getAuthUserData} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

const INITIALIZED_SUCCESS = "SET_INITIALIZED"

export type SetInitializedType = {
    type: "SET_INITIALIZED"
}


export type AppActionsType = SetInitializedType

let initialState = {
    initialized: false
}
export type InitialStateType = typeof initialState

const appReducer = (state:InitialStateType = initialState , action:AppActionsType):InitialStateType => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state

    }

}

export const initializedSuccess = (): AppActionsType => ({type: INITIALIZED_SUCCESS})




export const initializeApp = ():ThunkAction<void, AppStateType, unknown, AuthActionsType> => {
    return (dispatch) => {
        let promise = dispatch(getAuthUserData())

        Promise.all([promise]).then(()=> {
            dispatch(initializedSuccess())
        })
    }
}

export default appReducer