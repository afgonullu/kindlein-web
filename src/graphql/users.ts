import { gql, useMutation } from "@apollo/client";
import type { useHistory } from "react-router-dom";

import { IUser } from "../utils/interfaces";

// REGISTER
const REGISTER_USER = gql`
  mutation register($username: String!, $email: String!, $password: String!, $confirmPassword: String!) {
    register(
      registerInput: { username: $username, email: $email, password: $password, confirmPassword: $confirmPassword }
    ) {
      message
      success
      user {
        createdAt
        email
        id
        token
        username
      }
    }
  }
`;

export const useRegister = (
  setErrors: React.Dispatch<
    React.SetStateAction<{ username: string; email: string; password: string; confirmPassword: string }>
  >,
  history: ReturnType<typeof useHistory>,
  context: { user?: IUser | null; login: any; logout?: () => any },
) => {
  const [registerUser] = useMutation(REGISTER_USER, {
    update: (_, result) => {
      context.login(result.data.register.user);
      history.push("/");
    },
    onError: (error) => {
      // TODO: on the backend, check email taken or not, just like we check username taken or not. right now, different usernames can register with the same email.
      setErrors(error.graphQLErrors[0]?.extensions?.exception.errors);
    },
  });
  return registerUser;
};
/// / END OF REGISTER

// LOGIN
const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      message
      success
      user {
        createdAt
        email
        id
        token
        username
      }
    }
  }
`;

export const useLogin = (
  setErrors: React.Dispatch<React.SetStateAction<{ username: string; password: string }>>,
  history: ReturnType<typeof useHistory>,
  context: { user?: IUser | null; login: any; logout?: () => any },
) => {
  const [loginUser] = useMutation(LOGIN_USER, {
    update: (_, result) => {
      context.login(result.data.login.user);
      history.push("/");
    },
    onError: (error) => {
      // TODO: try logging in with wrong credentials, eg. wrong password. see the problem. change backend api to resolve.
      setErrors(error.graphQLErrors[0]?.extensions?.exception.errors);
    },
  });
  return loginUser;
};
// END OF LOGIN
