import { get } from 'axios'

export async function getFilmById(id) {
    const response = await get(`http://react-cdp-api.herokuapp.com/movies/${id}`);
    if (!response.data) {
        return [];
    }
    return response.data || [];

}