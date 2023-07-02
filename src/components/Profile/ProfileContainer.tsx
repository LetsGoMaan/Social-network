import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export type PhotosType = {
    small: string
    large: string
}
export type ContactsType = {
    github?: string
    vk?: string
    facebook?: string
    instagram?: string
    twitter?: string
    website?: string
    youtube?: string
    mainLink?: string

}

export type ProfileType = {
    photos: PhotosType
    fullName: string
    aboutMe: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: any

}

type PathParamsType = {
    userId: string
}

type MapDispatchProps = {
    getUserProfile: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (status: string) => void
    savePhoto: (photo: File) => void
    saveProfile: () => Promise<any>
}

type MapStateToPropsType = {
    profile: ProfileType
    status: string
    authorizedUserId: string
    isAuth: boolean

}

type ProfileContainerType = MapStateToPropsType & MapDispatchProps

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile () {
        let userId = this.props.match.params.userId
        console.log(userId)
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }


    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     savePhoto={this.props.savePhoto}
            />
        )


    }
}

let
    mapStateToProps = (state: AppStateType): MapStateToPropsType => {
        return {
            profile: state.profilePage.profile,
            status: state.profilePage.status,
            authorizedUserId: state.auth.userId,
            isAuth: state.auth.isAuth,
        }
    }

export default compose<ComponentType>(connect(mapStateToProps,
        {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter, withAuthRedirect)(ProfileContainer)

