import gql from 'graphql-tag'
import { makeRequest } from './makeRequest'

export async function getFilmsById(id) {
  const query = gql`
  query movie {
    data(id: ${id}) @rest(type: "Movie", path: "/${id}",) {
        genres
        id
        title
        overview
        poster_path
        release_date
        runtime
        tagline
        vote_average
    }
  }
`
  return await makeRequest(query)

}