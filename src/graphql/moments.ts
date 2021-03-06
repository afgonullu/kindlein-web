import { gql, useMutation, useQuery } from "@apollo/client";
import { IMoment } from "../utils/interfaces";

const GET_MOMENT = gql`
  query getMoment($id: ID!) {
    moment(id: $id) {
      id
      belongsTo {
        id
        name
      }
      body
      commentCount
      createdAt
      createdBy
      likeCount
      location
      momentDate
      title
      comments {
        id
        body
        createdAt
        username
      }
    }
  }
`;

export const useGetMoment = (id: string | undefined): IMoment | null => {
  const { data } = useQuery(GET_MOMENT, { variables: { id } });

  if (data) {
    return data.moment;
  }

  return null;
};

const ADD_MOMENT = gql`
  mutation addMoment($title: String!, $body: String!, $belongsTo: String!, $momentDate: String!, $location: String!) {
    addMoment(
      momentInput: { title: $title, body: $body, belongsTo: $belongsTo, momentDate: $momentDate, location: $location }
    ) {
      child {
        id
        moments {
          id
          belongsTo {
            id
          }
          body
          commentCount
          createdAt
          createdBy
          likeCount
          location
          momentDate
          title
        }
      }
      message
      success
    }
  }
`;

export const useAddMoment = () => {
  const [addMoment] = useMutation(ADD_MOMENT, {
    update: (_cache, _result) => {
      // cache.modify({
      //   id: cache.identify()
      //   fields: {
      //     children(existingChildren = []) {
      //       const newChildRef = cache.writeFragment({
      //         data: result.data.addMoment.child,
      //         fragment: gql`
      //           fragment NewChild on Child {
      //             id
      //             name
      //             birthDate
      //             createdAt
      //             createdBy
      //           }
      //         `,
      //       });
      //       return [...existingChildren, newChildRef];
      //     },
      //   },
      // });
    },
  });
  return addMoment;
};

// DELETE MOMENT
const DELETE_MOMENT = gql`
  mutation deleteMoment($id: ID!) {
    deleteMoment(id: $id) {
      success
      message
      moment {
        id
      }
      child {
        id
        moments {
          id
        }
      }
    }
  }
`;

export const useDeleteMoment = () => {
  const [deleteMoment] = useMutation(DELETE_MOMENT, {
    update: (_cache, _result) => {
      // cache.modify({
      //   fields: {
      //     getMoments(existingMomentRefs = [], { readField }) {
      //       return existingMomentRefs.filter(
      //         (momentRef: StoreObject) => result.data.deleteMoment.id !== readField("id", momentRef),
      //       );
      //     },
      //   },
      // });
    },
  });

  return deleteMoment;
};
// END OF DELETE MOMENT

// LIKE & UNLIKE A MOMENT
const LIKE_MOMENT = gql`
  mutation likeMoment($id: ID!) {
    likeMoment(id: $id) {
      success
      message
      moment {
        id
        likeCount
        likes {
          id
          username
        }
      }
      child {
        id
        moments {
          id
          likeCount
          likes {
            id
            username
          }
        }
      }
    }
  }
`;

export const useLikeMoment = () => {
  const [likeMoment] = useMutation(LIKE_MOMENT);

  return likeMoment;
};
// END OF LIKE & UNLIKE A MOMENT
