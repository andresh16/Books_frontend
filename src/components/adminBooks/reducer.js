import Immutable from 'immutable';
import * as actions from './actions';

const initialState = Immutable.Map();

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case actions.DELETE_BOOK:
            return state;
        default:
            return state;
    }
}