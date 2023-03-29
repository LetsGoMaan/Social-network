import React from "react";
import "./App.css";
import {Header} from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {PostsType} from "./redux/profile-reducer";
import {DialogsType, MessagesType} from "./redux/dialogs-reducer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

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
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path="/dialogs" render={() => <DialogsContainer />}/>
                <Route path="/profile" render={() => <ProfileContainer />}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
