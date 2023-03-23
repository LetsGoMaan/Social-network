import React from "react";
import {addPostActionCreator, PostsType, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

// type MyPostsPropsType = {
//     // store: StoreType
//     // posts: Array<PostsType>
//     // dispatch: (action: ActionsType) => void
//     // // addPost: () => void
//     // newPostText: string
//     // // updateNewPostText: (newText: string) => void
// }

// export const MyPostsContainer = (props: MyPostsPropsType) => {
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState()
//                 const onAddPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }
//                 const onPostChange = (text: string) => {
//                     store.dispatch(updateNewPostTextActionCreator(text))
//                 }
//                 return (
//                     <>
//                         <MyPosts addPost={onAddPost}
//                                  updateNewPostText={onPostChange}
//                                  posts={store.getState().profilePage.posts}
//                                  newPostText={store.getState().profilePage.newPostText}/>
//                     </>
//                 )
//             }
//         }
//         </StoreContext.Consumer>
//
//     );
// };
type MapStatePropsType = {
    posts: Array<PostsType>
    newPostText: string
}

type MapDispatchProps = {
    addPost: () => void
    updateNewPostText: (text:string) => void
}

let mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
            posts: state.profilePage.posts,
            newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch):MapDispatchProps => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text:string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
