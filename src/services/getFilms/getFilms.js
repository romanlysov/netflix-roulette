// // import axios from 'axios';
// import { get } from 'axios'
//
// const endPoint = 'http://react-cdp-api.herokuapp.com/movies';
//
// export async function getFilms({ sortBy, value, searchByFilter }) {
//     const params = {
//         sortBy,
//         sortOrder: 'desc',
//         search: value,
//         searchBy: searchByFilter
//     };
//     const response = await get(endPoint, { params });
//     if (!response.data) {
//         return [];
//     }
//     return response.data.data || [];
// }

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

export async function getFilms() {
  const query = gql`
  query movies($sortBy: String!) {
    data @rest(type: "Movies", path: "/", params: {sortBy: $sortBy}) {
      data
    }
  }
`
  const result = client.query({ query }).then(response => {
    return response.data.data.data
  })
  return result || []
}
