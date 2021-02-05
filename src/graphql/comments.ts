import { gql, StoreObject, useMutation } from "@apollo/client";

// CREATE COMMENT
const ADD_COMMENT = gql`
  mutation addComment($id: ID!, $body: String!) {
    addComment(id: $id, body: $body) {
      success
      message
      moment {
        id
        belongsTo {
          id
        }
        commentCount
        comments {
          id
          body
          createdAt
          username
        }
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
// TODO: Error handling
// TODO: clean up update, so far I think nothing needs to be done. but make sure one last time and finish up.
export const useAddComment = () => {
  const [addComment] = useMutation(ADD_COMMENT, {
    update: (_cache, _result) => {},
    onError: (_error) => {
      // setErrors(error.graphQLErrors[0]?.extensions?.exception.errors)
    },
  });
  return addComment;
};
// END OF CREATE COMMENT

// DELETE COMMENT
const DELETE_COMMENT = gql`
  mutation deleteComment($id: ID!, $momentId: ID!) {
    deleteComment(id: $id, momentId: $momentId) {
      id
      commentCount
      comments {
        id
      }
    }
  }
`;

export const useDeleteComment = () => {
  const [deleteComment] = useMutation(DELETE_COMMENT, {
    update: (cache, result) => {
      console.log(result);
      cache.modify({
        id: cache.identify(result.data.deleteComment),
        fields: {
          comments(existingCommentRefs = [], { readField }) {
            return existingCommentRefs.filter(
              (commentRef: StoreObject) => result.data.deleteComment.comments.id !== readField("id", commentRef),
            );
          },
        },
      });
    },
  });

  return deleteComment;
};
// END OF DELETE MOMENT
