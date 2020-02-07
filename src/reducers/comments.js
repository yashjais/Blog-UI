const initialState = []

export const commentsReducers = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_COMMENTS': {
            return [...state, ...action.payload]
        }
        default: {
            return [...state]
        }
    }
}