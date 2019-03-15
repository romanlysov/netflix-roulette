import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { RestLink } from 'apollo-link-rest'
import gql from 'graphql-tag'

const restLink = new RestLink({
  uri: 'http://react-cdp-api.herokuapp.com/movies'
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
  const result = client.query({ query }).then(response => {
    return response.data.data.data
  })
  return result || []
}
