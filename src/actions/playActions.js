// ==========================================================================
// Actions
// ==========================================================================
import * as types from './actionTypes';
import {loadEnabled} from '../base/utils';

export function loadPlaySuccess(play) {
    return {
        type: types.LOAD_PLAY_SUCCESS,
        play
    };
}

export function loadPlayError(response) {
    return {
        type: types.LOAD_PLAY_FAIL,
        play: response
    };
}

export function loadPlay() {
    return function (dispatch) {
        fetch('/api/play.json').then(res => res.json())
            .then(data => dispatch(loadPlaySuccess(loadEnabled(data))))
            .catch(err => dispatch(loadPlayError(err)));
    };
}
