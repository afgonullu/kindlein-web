import { gql, StoreObject, useMutation, useQuery } from "@apollo/client";
import { IChild } from "../utils/interfaces";

export const CHILD_FIELDS = gql`
  fragment ChildFields on Child {
    name
    id
    createdBy
    createdAt
    birthDate
    moments {
      id
      title
      body
      createdAt
      createdBy
      momentDate
      location
      likeCount
      commentCount
      belongsTo {
        name
        id
      }
      comments {
        id
        body
        createdAt
        username
      }
    }
  }
`;

const GET_CHILDREN = gql`
  query getChildrenOfUser($userId: ID!) {
    children(userId: $userId) {
      ...ChildFields
    }
  }
  ${CHILD_FIELDS}
`;

export const useGetChildren = (id: string | undefined): IChild[] => {
  const { data } = useQuery(GET_CHILDREN, { variables: { userId: id } });

  if (data) {
    return data.children;
  }

  return [];
};

const GET_CHILD = gql`
  query getChild($id: ID!) {
    child(id: $id) {
      ...ChildFields
    }
  }
  ${CHILD_FIELDS}
`;

export const useGetChild = (id: string | undefined): IChild | null => {
  const { data } = useQuery(GET_CHILD, { variables: { id } });

  if (data) {
    return data.child;
  }

  return null;
};

// ADD CHILD
const ADD_CHILD = gql`
  mutation addChild($name: String!, $birthDate: String!) {
    addChild(childInput: { name: $name, birthDate: $birthDate }) {
      success
      message
      child {
        id
        name
        birthDate
        createdAt
        createdBy
      }
    }
  }
`;
// TODO: Error handling
export const useAddChild = () => {
  const [addChild] = useMutation(ADD_CHILD, {
    update: (cache, result) => {
      cache.modify({
        fields: {
          children(existingChildren = []) {
            const newChildRef = cache.writeFragment({
              data: result.data.addChild.child,
              fragment: gql`
                fragment NewChild on Child {
                  id
                  name
                  birthDate
                  createdAt
                  createdBy
                }
              `,
            });
            return [...existingChildren, newChildRef];
          },
        },
      });
    },
    onError: (_error) => {
      // setErrors(error.graphQLErrors[0]?.extensions?.exception.errors)
    },
  });
  return addChild;
};

// END OF ADD CHILD

// DELETE CHILD
const DELETE_CHILD = gql`
  mutation deleteChild($id: ID!) {
    deleteChild(id: $id) {
      success
      message
      child {
        id
      }
      moments {
        id
      }
    }
  }
`;

// TODO: add update of moments in cache
export const useDeleteChild = () => {
  const [deleteChild] = useMutation(DELETE_CHILD, {
    update: (cache, result) => {
      cache.modify({
        fields: {
          children(existingChildRefs = [], { readField }) {
            return existingChildRefs.filter(
              (childRef: StoreObject) => result.data.deleteChild.child.id !== readField("id", childRef),
            );
          },
        },
      });
    },
  });

  return deleteChild;
};
// END OF DELETE CHILD
