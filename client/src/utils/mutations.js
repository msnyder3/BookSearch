import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($name: String!) {
    addUser(name: $name) {
      _id
      name
      skills
    }
  }
`;

export const ADD_FAV_BOOK = gql `
  mutation addFavbook($userId: ID!, $favBook: String!) {
    addFavbook(userId: $profileId, favBook: $favBook) {
      _id
      name
      skills
    }
  }
`;

export const REMOVE_FAV_BOOK = gql `
mutation removeBook(userId: #userId), favBook: $favBook) {
    removeBook(userId: #userId), favBook: $favBook) {
        _id
    }
}
`;

export const REMOVE_USER = gql `
  mutation removeUser()

`