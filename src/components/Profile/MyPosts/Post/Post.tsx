import React from "react";
import classes from "./Post.module.css";


type PostPropsType = {
    message: string
    likesCount: number
}



export const Post = (props: PostPropsType) => {
    return (
        <>
            <div className={classes.post}>
                <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" alt="avatar"/>
                {props.message}
                <div>
                    <span> likes {props.likesCount}</span>
                </div>
            </div>
        </>
    );
};
