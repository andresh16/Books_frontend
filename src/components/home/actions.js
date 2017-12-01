import axios from 'axios';
import {API_URL} from '../../constants';
export const GET_LIST_ALL_BOOKS = "GET_LIST_ALL_BOOKS";

export function getListAllBooks(){
    const request = axios.get(API_URL + "books");
    return {
        type: GET_LIST_ALL_BOOKS,
        payload: request
    };
}


export function findBooksByTitleAuthot(keyWordTitleAuthor){

    const json = {
        keyWordTitleAuthor
    };
    const request = axios.post(API_URL + "books/findByTitleOrAuthor",json);
    return {
        type: GET_LIST_ALL_BOOKS,
        payload: request
    };
}

