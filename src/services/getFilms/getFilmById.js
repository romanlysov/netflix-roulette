// import { get } from 'axios'
//
// export async function getFilmById(id) {
//     const response = await get(`http://react-cdp-api.herokuapp.com/movies/${id}`);
//     if (!response.data) {
//         return [];
//     }
//     return response.data || [];
//
// }

import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { RestLink } from 'apollo-link-rest'
import gql from 'graphql-tag'

const restLink = new RestLink({
  uri: 'http://react-cdp-api.herokuapp.com/movies',
})

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache()
})

export async function getFilmById(id) {
  const query = gql`
  query movie {
    data @rest(type: "Movie", path: "/${id}",) {
        title
    }
  }
`
  const result = client.query({ query }).then(response => {
    return response.data.title
  })
  return result || {}
}
