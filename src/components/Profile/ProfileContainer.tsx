import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";

type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    photos: PhotosType
    fullName: string
    aboutMe: string
}

type MapDispatchProps = {
    setUserProfile: (profile:ProfileType) => void
}

type MapStateToPropsType = {
    profile: ProfileType
}

type ProfileContainerType = MapStateToPropsType & MapDispatchProps

class ProfileContainer extends React.Component<ProfileContainerType>  {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }


    render () {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        profile: state.profilePage.profile

    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)

