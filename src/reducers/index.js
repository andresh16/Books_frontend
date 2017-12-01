import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import BooksReducer from '../components/home/reducer';
import MenuReducer from '../components/menu/reducer';


export default combineReducers({
    routing: routerReducer,
    form: formReducer,
    books: BooksReducer,
    menu: MenuReducer
});
