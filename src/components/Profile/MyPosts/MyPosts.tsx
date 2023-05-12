import React from "react";
import classes from "./MyPosts.module.css"
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type MyPostsPropsType = {
    posts: Array<PostsType>
    addPost: (newPostText: string) => void
}

type FormDataType = {
    newPostText: string
}


export const MyPosts = (props:MyPostsPropsType) => {

    const postsElements = props.posts.map(p =>  <Post key={p.id} message={p.message} likesCount={p.likesCount}/> )

    const onAddPost = (values: any) => {
        props.addPost(values.newPostText)
    }

    return (
        <>
            <div className={classes.postBlock}>
                <h3>My posts</h3>
                <AddNewPostFormRedux onSubmit={onAddPost}/>
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


const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} placeholder={"Start new post"} component={"textarea"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>

        </form>
    )
}

const AddNewPostFormRedux = reduxForm<FormDataType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)