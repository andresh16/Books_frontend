import Immutable from 'immutable';
import * as actions from './actions';
import {get} from 'lodash';

const initialState = Immutable.Map({
    keywordTitleAuthor: "",
    books:  []
});

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case actions.GET_LIST_ALL_BOOKS:
            const response = get(action.payload,'data',[]);
            return state.withMutations(map => {
                map.set('books', response);
            });
        default:
            return state;
    }
}