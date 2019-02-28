// import axios from 'axios';
import { get } from 'axios'

const endPoint = 'http://react-cdp-api.herokuapp.com/movies';

export async function getFilms({ sortBy, value, searchByFilter }) {
    const params = {
        sortBy,
        sortOrder: 'desc',
        search: value,
        searchBy: searchByFilter
    };
    const response = await get(endPoint, { params });
    if (!response.data) {
        return [];
    }
    return response.data.data || [];
}