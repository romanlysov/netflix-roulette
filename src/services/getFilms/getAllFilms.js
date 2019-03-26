import gql from 'graphql-tag'
import { makeRequest } from './makeRequest'

export async function getAllFilms(sortBy) {
 const query = gql`
  query movies {
    data(sortBy:${sortBy}, sortOrder: "desc") @rest(type: "Movies", path: "/?{args}",) {
      data
    }
  }
`
 const response = await makeRequest(query)
 return response.data || []

}
