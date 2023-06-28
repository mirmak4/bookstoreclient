import axios from 'axios';
import baseUrl from '../../config';

export const getBooksService = () => axios.get(`${baseUrl}/bookstore/api/v1/books`);

export const getBooksByTitleService = (title) => axios.get(`${baseUrl}/bookstore/api/v1/books/${title}`);