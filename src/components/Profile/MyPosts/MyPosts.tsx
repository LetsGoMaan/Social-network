import React from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/profile-reducer";


type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: () => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}


export const MyPosts = (props:MyPostsPropsType) => {

    const postsElements = props.posts.map(p =>  <Post key={p.id} message={p.message} likesCount={p.likesCount}/> )

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        if(newPostElement.current) {
            let text = newPostElement.current.value
            props.updateNewPostText(text)
        }
    }

    return (
        <>
            <div className={classes.postBlock}>
                <h3>My posts</h3>
                <div>
                    <div><textarea placeholder={"Start new post"} onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
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
