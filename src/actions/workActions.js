// ==========================================================================
// Actions
// ==========================================================================
import * as types from './actionTypes';
import {loadEnabled} from '../base/utils';

export function loadWorkSuccess(work) {
    return {
        type: types.LOAD_WORK_SUCCESS,
        work
    };
}

export function loadWorkError(response) {
    return {
        type: types.LOAD_WORK_FAIL,
        work: response
    };
}

export function loadWork() {
    return function (dispatch) {
        fetch('/api/work.json').then(res => res.json())
        .then(data => dispatch(loadWorkSuccess(loadEnabled(data))))
            .catch(err => dispatch(loadWorkError(err)));
    };
}
