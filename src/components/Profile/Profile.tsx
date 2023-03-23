import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../App";
import {ActionsType} from "../../redux/store";


type ProfilePropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ActionsType) => void
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    debugger
    return (
        <>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </>
    );
};

