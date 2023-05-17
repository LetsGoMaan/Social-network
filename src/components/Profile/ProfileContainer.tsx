import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    photos: PhotosType
    fullName: string
    aboutMe: string
}

type PathParamsType = {
    userId: string
}

type MapDispatchProps = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
}

type MapStateToPropsType = {
    profile: ProfileType
    status: string
    authorizedUserId: null
    isAuth: boolean
}

type ProfileContainerType = MapStateToPropsType & MapDispatchProps

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

class ProfileContainer extends React.Component<PropsType>  {

    componentDidMount() {

        // let userId = this.props.match.params.userId || "28139"
        // // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        // profileAPI.getProfile(userId).then(response => {
        //         this.props.setUserProfile(response.data)
        //     })
        this.props.getUserProfile(this.props.match.params.userId || "28139")
        this.props.getStatus(this.props.match.params.userId)
    }


    render () {
            debugger
            return (
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            )


    }
}

let mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth,
    }
}

export default compose<ComponentType>(connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),withRouter, withAuthRedirect  )(ProfileContainer)

