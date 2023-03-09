import React from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <>
            <div className={classes.postBlock}>
                <h3>My posts</h3>
                <div>
                    <div><textarea></textarea></div>
                    <div>
                        <button>Add post</button>
                    </div>

                </div>
                <div>
                    New posts
                </div>
                <div className={classes.posts}>
                    <Post message={"Hi, how are you"} likesCount={5}/>
                    <Post message={"It's my first post"} likesCount={10}/>

                </div>
            </div>
        </>
    );
};

