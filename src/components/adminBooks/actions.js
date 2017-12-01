import axios from 'axios';
import {API_URL} from '../../constants';
export const DELETE_BOOK = "DELETE_BOOK";

export function deleteBook(bookId){
    console.log("bookId",bookId);
    const request = axios.delete(`${API_URL}book/${bookId}`);
    return {
        type: DELETE_BOOK,
        payload: request
    };
}

export function editBook(book){
    console.log("book",book);
    // const request = axios.get(API_URL + "books");
    return {
        type: DELETE_BOOK
        // payload: request
    };
}