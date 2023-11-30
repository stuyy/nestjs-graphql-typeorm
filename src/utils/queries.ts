import gql from 'graphql-tag';

export const createUserMutation = gql`
  mutation {
    createUser(createUserData: { username: "anson", displayName: "Anson" }) {
      id
      username
      displayName
    }
  }
`;

export const getUsersQuery = gql`
  {
    getUsers {
      id
      username
      displayName
    }
  }
`;
