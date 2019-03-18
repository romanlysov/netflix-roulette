import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { RestLink } from 'apollo-link-rest'
import gql from 'graphql-tag'

import { endPoint } from '../../constants'

const restLink = new RestLink({
  uri: endPoint
})

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache()
})

export async function getFilmById(id) {
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
  const response = await client.query({ query })
  if (!response.data) {
    return []
  }

  return response.data.data || {}
}
