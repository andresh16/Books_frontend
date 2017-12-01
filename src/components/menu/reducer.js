import Immutable from 'immutable';
import * as actions from './actions';

const initialState = Immutable.Map({
    isOpen: false,
    title: '',
    menuOptions: [
        {
            title: "Librería",
            url: "/Home"
        },
        {
            title: "Administrar libros",
            url: "/AdminBooks"
        }
    ]
});

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case actions.TOGGLE_MENU:
            return state.withMutations(map => {
                map.set('isOpen', !state.get('isOpen'));
            });
        case actions.CLOSE_MENU:
            return state.withMutations(map => {
                map.set('isOpen', false);
            });
        case actions.CHANGE_TITLE:
            return state.withMutations(map => {
                map.set('title', action.title);
            });
        default:
            return state;
    }
}