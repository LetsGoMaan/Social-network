import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from "react-router-dom";

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
    setUserProfile: (profile:ProfileType) => void
}

type MapStateToPropsType = {
    profile: ProfileType
}

type ProfileContainerType = MapStateToPropsType & MapDispatchProps

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerType

class ProfileContainer extends React.Component<PropsType>  {

    componentDidMount() {

        let userId = this.props.match.params.userId || 2
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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


let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)

