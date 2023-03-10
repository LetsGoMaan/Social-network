import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../App";


type ProfilePropsType = {
    posts: Array<PostsType>
}

export const Profile = (props: ProfilePropsType) => {




    return (
        <>
            <ProfileInfo />
            <MyPosts posts={props.posts}/>
        </>
    );
};

