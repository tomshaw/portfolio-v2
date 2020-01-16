import * as types from '../actions/actionTypes';

export default function workReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_WORK_SUCCESS:
            return action.work;
        default:
            return state;
    }
}