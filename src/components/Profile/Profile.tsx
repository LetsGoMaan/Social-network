import React from "react";
import classes from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {
    return (
        <>
            <div className={classes.content}>
                <div>
                    <img src="https://i.ytimg.com/vi/ZXsQAXx_ao0/maxresdefault.jpg" alt=""/>
                </div>
                <div>
                    ava + descr
                </div>
                <MyPosts/>

            </div>
        </>
    );
};

