import { gql, StoreObject, useMutation } from "@apollo/client";

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
