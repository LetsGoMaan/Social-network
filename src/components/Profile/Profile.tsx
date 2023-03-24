import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


// type ProfilePropsType = {
//     // store: StoreType
//     // profilePage: ProfilePageType
//     // dispatch: (action: ActionsType) => void
//     // addPost: () => void
//     // updateNewPostText: (newText: string) => void
// }

export const Profile = () => {

    return (
        <>
            <ProfileInfo />
            <MyPostsContainer />
        </>
    );
};

