import axios from 'axios'

export const getComments = (comments) => {
    return { type: 'SET_COMMENTS', payload: comments}
}

export const startGetComments = () => {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then(response => {
                const comments = response.data
                dispatch(getComments(comments))
            })
    }
}