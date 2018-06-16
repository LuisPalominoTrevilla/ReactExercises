import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    console.log('Called');
    switch(action.type) {
        case ActionTypes.ADD_COMMENT:
            console.log('Comment added');
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log('Comment: ' + comment);
            return state.concat(comment);
        default:
            return state;
    }
};