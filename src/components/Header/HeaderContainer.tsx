import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData, logout, setAuthUserData} from "../../redux/auth-reducer";

type MapStatePropsType = {
    isAuth: boolean
    login: string
}

type MapDispatchPropsType = {
    setAuthUserData: (userId: number | null, email: string, login: string, isAuth: boolean) => void
    getAuthUserData: () => void
    logout: () => void
}

type HeaderContainerPropsType = MapDispatchPropsType & MapStatePropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType>{
    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //     withCredentials: true
        // })
        // headerAPI.authMe().then(response => {
        //             if(response.data.resultCode === 0) {
        //                 let {id, email, login} = response.data.data
        //                 this.props.setAuthUserData(id, email, login);
        //             }
        //     })
        this.props.getAuthUserData()
    }

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

export default connect(mapStateToProps, {setAuthUserData, getAuthUserData, logout})(HeaderContainer)
