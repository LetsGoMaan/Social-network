import React from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";


type PostsType = {
    id: number
    message: string
    likesCount: number
}

type MyPostsPropsType = {
    posts: Array<PostsType>
}


export const MyPosts = (props:MyPostsPropsType) => {

    const postsElements = props.posts.map(p =>  <Post message={p.message} likesCount={p.likesCount}/> )

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
                    {postsElements}
                </div>
            </div>
        </>
    );
};

