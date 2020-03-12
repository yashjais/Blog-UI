import axios from 'axios'

export const getPosts = (posts) => {
    return { type: 'SET_POSTS', payload: posts}
}

export const startGetPosts = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data
                dispatch(getPosts(posts))
            })
    }
}