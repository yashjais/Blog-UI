import axios from 'axios'

export const usersList = (users) => {
    return { type: 'SET_USERS', payload: users}
}

export const startGetUsers = () => {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            const users = response.data
            dispatch(usersList(users))
        })
    }
}