import profileReducer, {addPostActionCreator, deletePost, PostsType} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: "Hi, how are you", likesCount: 5},
        {id: 2, message: "It's my first post", likesCount: 10},
        {id: 3, message: "It's my first post", likesCount: 10},
        {id: 4, message: "It's my first post", likesCount: 10},
    ] as Array<PostsType>,
    profile: {
        photos: {
            small: '',
            large: ''
        },
        fullName: '',
        aboutMe: ''
    },
    status: ""

}

it('The number of posts should increase', () => {
 let action = addPostActionCreator('it-kamasutra.com');
 let newState = profileReducer(state, action);

 expect(newState.posts.length).toBe(5);
})

it('Message of new post should be correct', () => {
    let action = addPostActionCreator('it-kamasutra.com');
    let newState = profileReducer(state, action);

    expect(newState.posts[4].message).toBe('it-kamasutra.com')
})

it('After deletion, the number of posts should decrease', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3)
})

it('After deletion, the number of posts should remain the same if the id is incorrect', () => {
    let action = deletePost(1000)
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4)
})