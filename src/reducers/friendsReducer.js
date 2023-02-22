import friends from '../sampledata.js';
import { ADD_FRIEND, REMOVE_FRIEND } from '../actions/friendsActions.js';

const initialState = {
    friends: friends,
}

const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_FRIEND:
            return {
                ...state, 
                friends: [...friends, action.payload]
            }
        case REMOVE_FRIEND:
            return {
                ...state
            }
        default:
            return state;
    }
}

export default friendsReducer;