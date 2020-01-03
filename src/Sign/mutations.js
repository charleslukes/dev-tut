import gql from "graphql-tag";

export const REGISTER_USER = gql`
  mutation addUser(
    $firstname: String!
    $lastname: String!
    $email: String!
    $country: String
    $password: String
  ) {
    createUser(
      firstname: $firstname
      lastname: $lastname
      email: $email
      country: $country
      password: $password
    ) {
      firstname
      lastname
      email
      country
      password
    }
  }
`;

export const SIGNIN_USER = gql`
  mutation signInUser($email: String!, $password: String!) {
    signInUser(email: $email, password: $password) {
      firstname
      lastname
    }
  }
`;
