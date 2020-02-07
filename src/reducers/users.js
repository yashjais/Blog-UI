const initialState = []

export const usersReducers = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_USERS': {
            return [...state,...action.payload]
        }
        default: {
            return [...state]
        } 
    }
}