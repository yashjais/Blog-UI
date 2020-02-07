import { createStore, combineReducers, applyMiddleware } from 'redux'
import { usersReducers } from '../reducers/users'
import { postsReducers } from '../reducers/posts'
import { commentsReducers } from '../reducers/comments'

import thunk from 'redux-thunk'


const configureStore = () => {
    const store = createStore(combineReducers({
        users: usersReducers,
        posts: postsReducers,
        comments: commentsReducers
    }), applyMiddleware(thunk))
    return store
}

export default configureStore