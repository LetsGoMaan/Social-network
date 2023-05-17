import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logout, setAuthUserData} from "../../redux/auth-reducer";

type MapStatePropsType = {
    isAuth: boolean
    login: string
}

type MapDispatchPropsType = {
    setAuthUserData: (userId: number | null, email: string, login: string, isAuth: boolean) => void
    logout: () => void
}

type HeaderContainerPropsType = MapDispatchPropsType & MapStatePropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType>{
    render () {
         return (
             <Header {...this.props} />
         );
     }
}

const mapStateToProps = (state:AppStateType):MapStatePropsType => {
return (
    {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
)

}

export default connect(mapStateToProps, {setAuthUserData,logout})(HeaderContainer)
