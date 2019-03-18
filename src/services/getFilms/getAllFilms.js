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

export async function getAllFilms(sortBy) {
  const query = gql`
  query movies {
    data(sortBy:${sortBy}, sortOrder: "desc") @rest(type: "Movies", path: "/?{args}",) {
      data
    }
  }
`
  const response = await client.query({ query })
  response.errors = null
  if (!response.data.data) {
    return []
  }

  return response.data.data.data || []
}
