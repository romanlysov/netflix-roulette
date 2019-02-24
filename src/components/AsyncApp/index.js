import axios from 'axios';

const endPoint = 'http://react-cdp-api.herokuapp.com/movies';

export async function getFilms({ sortBy, value, searchByFilter }) {
  const params = {
    sortBy,
    sortOrder: 'desc',
    search: value,
    searchBy: searchByFilter
  };
  const response = await axios.get(endPoint, { params });
  if (!response.data) {
    return [];
  }
  return response.data.data || [];
}

export async function getAllFilms({ sortBy }) {
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

