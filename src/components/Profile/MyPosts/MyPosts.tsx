import React from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsType} from "../../../App";
import {ActionsType } from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    posts: Array<PostsType>
    dispatch: (action: ActionsType) => void
    // addPost: () => void
    newPostText: string
    // updateNewPostText: (newText: string) => void
}


export const MyPosts = (props:MyPostsPropsType) => {

    const postsElements = props.posts.map(p =>  <Post message={p.message} likesCount={p.likesCount}/> )

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
            props.dispatch(addPostActionCreator())
    }

    const onPostChange = () => {
        // if(newPostElement.current) {
        //     props.updateNewPostText(newPostElement.current.value)
        // }
        if(newPostElement.current) {
            props.dispatch(updateNewPostTextActionCreator(newPostElement.current.value))
        }
    }

    return (
        <>
            <div className={classes.postBlock}>
                <h3>My posts</h3>
                <div>
                    <div><textarea placeholder={"Start new post"} onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
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

