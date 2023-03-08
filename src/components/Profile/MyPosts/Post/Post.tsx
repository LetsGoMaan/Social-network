import React from "react";
import classes from "./Post.module.css";

export const Post = () => {
    return (
        <>
            <div className={classes.post}>
                <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="avatar"/>
                Post 1
                <div>
                    <span>like</span>
                </div>
            </div>
        </>
    );
};
