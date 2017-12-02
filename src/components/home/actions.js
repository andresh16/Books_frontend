import axios from 'axios';
import {API_URL} from '../../constants';
export const GET_LIST_ALL_BOOKS = "GET_LIST_ALL_BOOKS";
export const CHANGE_FILTER = "CHANGE_FILTER";

export function getListAllBooks(){
    const request = axios.get(API_URL + "books");
    return {
        type: GET_LIST_ALL_BOOKS,
        payload: request
    };
}


export function findBooksByTitleAuthor(keyWordTitleAuthor){
    const request = axios.get(`${API_URL}books/keyWordTitleAuthor/${keyWordTitleAuthor}`);
    return {
        type: GET_LIST_ALL_BOOKS,
        payload: request
    };
}

export function changeFilter(keyWordTitleAuthor){

    return {
        type: CHANGE_FILTER,
        keyWordTitleAuthor
    };
}