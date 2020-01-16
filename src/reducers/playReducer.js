import * as types from '../actions/actionTypes';

export default function playReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_PLAY_SUCCESS:
            return action.play;
        default:
            return state;
    }
}