import { gql } from '@apollo/client';

//Important for useQuery: Each query we'd like to be able to perform gets exported out of our queries.js utility
export const QUERY_USERS = gql`
 query allUsers {
   users {
     _id
     name
     skills
   }
 }
`;

export const QUERY_SINGLE_USER = gql`
 query singleUser($userId: ID!) {
   User(profileId: $userId) {
     _id
     name
     skills
   }
 }
`;

export const QUERY_BOOKS = gql `
 query allBooks {
    books{

    }
 }
`;

export const QUERY_SINGLE_BOOK = gql `
 query singleBook{
    book {

    }
 }
`;