import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "./ProfileContainer";


type ProfilePropsType = {
    profile: ProfileType
}

export const Profile = (props:ProfilePropsType) => {

    return (
        <>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </>
    );
};

