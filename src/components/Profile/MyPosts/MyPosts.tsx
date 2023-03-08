import React from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div>
                    New posts
                </div>
                <div className={classes.posts}>
                   <Post/>
                   <Post/>
                   <Post/>
                </div>
            </div>
        </>
    );
};

