import React from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsType} from "../../../App";

type MyPostsPropsType = {
    posts: Array<PostsType>
}


export const MyPosts = (props:MyPostsPropsType) => {

    const postsElements = props.posts.map(p =>  <Post message={p.message} likesCount={p.likesCount}/> )

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        // тоже самое что и внизу alert(newPostElement.current?.value)
        if(newPostElement.current) {
            alert(newPostElement.current.value)
        }
    }

    return (
        <>
            <div className={classes.postBlock}>
                <h3>My posts</h3>
                <div>
                    <div><textarea ref={newPostElement}></textarea></div>
                    <div>
                        <button onClick={addPost}>Add post</button>
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

