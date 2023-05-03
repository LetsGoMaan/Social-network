import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {PostsType} from "./redux/profile-reducer";
import {DialogsType, MessagesType} from "./redux/dialogs-reducer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";




export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

// export type AppPropsType = {
//     // store: StoreType
//     // state: StateType
//     // dispatch: (action: ActionsType) => void
//     // addPost: () => void
//     // updateNewPostText: (newText: string) => void
//     // addMessage: () => void
//     // updateNewMessageText: (newText: string) => void
// }


function App() {

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer />}/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
                <Route path="/login" render={() => <Login/>}/>
            </div>
        </div>
    );
}

export default App;
