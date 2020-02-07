const initialState = []

export const postsReducers = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_POSTS': {
            return [...state, ...action.payload]
        }
        default: {
            return [...state]
        }
    }
}