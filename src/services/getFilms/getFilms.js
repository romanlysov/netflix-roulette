import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { RestLink } from 'apollo-link-rest'
// import { onError } from "apollo-link-error";
import gql from 'graphql-tag'

import { endPoint } from '../../constants'

const restLink = new RestLink({
  uri: endPoint,
})

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),

})

export async function getFilms({ sortBy, value, searchByFilter }) {
  const query = gql`
  query movies {
    data(sortBy: ${sortBy}, sortOrder: "desc", search: "${value}", searchBy: ${searchByFilter} ) @rest(type: "Movies", path: "/?{args}",) {
      data
    }
  }
`
  const response = await client.query({ query })
  if (!response.data.data) {
    return []
  }

  return response.data.data.data || []
}
