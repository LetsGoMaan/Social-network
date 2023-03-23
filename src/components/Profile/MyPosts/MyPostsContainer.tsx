import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";

type MyPostsPropsType = {
    // store: StoreType
    // posts: Array<PostsType>
    // dispatch: (action: ActionsType) => void
    // // addPost: () => void
    // newPostText: string
    // // updateNewPostText: (newText: string) => void
}


export const MyPostsContainer = (props: MyPostsPropsType) => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState()
                const onAddPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                const onPostChange = (text: string) => {
                    store.dispatch(updateNewPostTextActionCreator(text))
                }
                return (
                    <>
                        <MyPosts addPost={onAddPost}
                                 updateNewPostText={onPostChange}
                                 posts={store.getState().profilePage.posts}
                                 newPostText={store.getState().profilePage.newPostText}/>
                    </>
                )
            }
        }
        </StoreContext.Consumer>

    );
};
