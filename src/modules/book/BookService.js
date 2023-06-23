import axios from 'axios';
import baseUrl from '../../config';

const getBooksService = () => axios.get(`${baseUrl}/bookstore/api/v1/books`);

export default getBooksService;