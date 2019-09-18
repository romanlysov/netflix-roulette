import gql from 'graphql-tag'
import { makeRequest } from './makeRequest'

export async function getFilms({sortBy, value, searchByFilter}) {
  const query = gql`
  query movies {
    data(sortBy: ${sortBy}, sortOrder: "desc", search: "${value}", searchBy: ${searchByFilter} ) @rest(type: "Movies", path: "/?{args}",) {
      data
    }
  }
`
  const response = await makeRequest(query)
  return response.data || []
}