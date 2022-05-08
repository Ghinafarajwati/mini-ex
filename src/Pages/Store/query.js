import { gql } from "@apollo/client";
const GETUsers = gql`
query MyQuery {
  users {
    id
    firstname
    lastname
    age
    gender
    country
    mail
    event
  }
}
`;

const DELETE = gql`
mutation MyMutation($id: Int!) {
  delete_users_by_pk(id: $id) {
    id
  }
}
`;

const INSERT = gql`
mutation MyMutation($firstname: String!, $lastname: String!, $age: Int!, $gender: String!, $country: String!, $mail: String!, $event: String!) {
  insert_users(objects: {firstname: $firstname, lastname: $lastname, age: $age, gender: $gender, country: $country, mail: $mail, event: $event}) {
    returning {
      id
    }
  }
}
`;
const EDIT = gql`
  mutation MyMutation( $id: Int! $firstname: String! $lastname: String! $age: Int! $gender: String! $country: String! $mail: String! $event: String!) {
    update_users_by_pk(pk_columns: { id: $id }
      _set: { firstname: $firstname, lastname: $lastname, age: $age, gender: $gender, country: $country, mail: $mail, event: $event }) {id}
  }
`;
export { GETUsers, DELETE, INSERT, EDIT };
