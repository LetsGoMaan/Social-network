import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../App";


type ProfilePropsType = {
    state: ProfilePageType
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <>
            <ProfileInfo />
            <MyPosts posts={props.state.posts}/>
        </>
    );
};

