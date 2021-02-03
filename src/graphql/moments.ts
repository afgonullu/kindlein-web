import { gql, useMutation } from "@apollo/client";

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
    update: (_cache, result) => {
      console.log(result);
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