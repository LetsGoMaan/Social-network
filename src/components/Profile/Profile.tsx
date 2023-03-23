import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type ProfilePropsType = {
    store: StoreType
    // profilePage: ProfilePageType
    // dispatch: (action: ActionsType) => void
    // addPost: () => void
    // updateNewPostText: (newText: string) => void
}

export const Profile = (props: ProfilePropsType) => {
    debugger
    return (
        <>
            <ProfileInfo />
            <MyPostsContainer store={props.store}/>
        </>
    );
};

