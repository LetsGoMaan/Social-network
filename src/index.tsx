import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const posts = [
    {id: 1, message: "Hi, how are you", likesCount: 5},
    {id: 2, message: "It's my first post", likesCount: 10},
    {id: 2, message: "It's my first post", likesCount: 10},
    {id: 2, message: "It's my first post", likesCount: 10},
]

const dialogs = [
    {id: 1, name: "Dimych"},
    {id: 2, name: "Andrey"},
    {id: 3, name: "Natasha"},
    {id: 4, name: "Sveta"},
    {id: 5, name: "Sasha"},
    {id: 6, name: "Valera"},
]

const messages= [
    {id: 1, message: "Hi" },
    {id: 2, message: "How are you" },
    {id: 3, message: "Yo" },
    {id: 4, message: "Kavabanga" },
    {id: 5, message: "IlikeSeik" },
    {id: 6, message: "YOLO" },
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}  />,
  document.getElementById('root')
);