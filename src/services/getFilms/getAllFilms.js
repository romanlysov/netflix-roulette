import axios from 'axios';

const endPoint = 'http://react-cdp-api.herokuapp.com/movies';

export async function getAllFilms(sortBy) {
    const params = {
        sortBy,
        sortOrder: 'desc'
    };
    const response = await axios.get(endPoint, { params });
    if (!response.data) {
        return [];
    }
    return response.data.data || [];
}