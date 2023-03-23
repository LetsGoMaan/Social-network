import React from "react";
import {StoreType} from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type MyPostsPropsType = {
    store: StoreType
    // posts: Array<PostsType>
    // dispatch: (action: ActionsType) => void
    // // addPost: () => void
    // newPostText: string
    // // updateNewPostText: (newText: string) => void
}


export const MyPostsContainer = (props:MyPostsPropsType) => {
    let state = props.store.getState()


    const onAddPost = () => {
            props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text:string) => {
            props.store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <>
          <MyPosts addPost={onAddPost} updateNewPostText={onPostChange} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
        </>
    );
};
