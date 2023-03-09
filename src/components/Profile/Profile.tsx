import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export const Profile = () => {

    const posts = [
        {id: 1, message: "Hi, how are you", likesCount: 5},
        {id: 2, message: "It's my first post", likesCount: 10},
        {id: 2, message: "It's my first post", likesCount: 10},
        {id: 2, message: "It's my first post", likesCount: 10},
    ]


    return (
        <>
            <ProfileInfo />
            <MyPosts posts={posts}/>
        </>
    );
};

