// ==========================================================================
// Combine Reducers
// ==========================================================================

import {combineReducers} from 'redux';

import loading from './loadingReducer';
import section from './sectionReducer';
import work from './workReducer';
import play from './playReducer';
import gallery from './galleryReducer';
import theme from './themeReducer';

const rootReducer = combineReducers({
    loading,
    section,
    work,
    play,
    gallery,
    theme
});

export default rootReducer;
