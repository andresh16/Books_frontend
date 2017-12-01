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
            const data = get(action,'payload.data',[]);
            return state.withMutations(map => {
                map.set('books', data);
            });
        default:
            return state;
    }
}