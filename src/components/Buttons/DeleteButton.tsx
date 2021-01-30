import React from "react";
import { Button } from "react-bootstrap";
import { Trash } from "react-feather";
import { useDeleteChild } from "../../graphql/children";

const DeleteButton: React.FC<{ childId: string | null; momentId: string | null; commentId: string | null }> = ({
  childId,
  momentId,
  commentId,
}) => {
  const deleteChild = useDeleteChild();

  console.log(childId, momentId, commentId);

  // TODO: add confirmation modal
  const handleClick = () => {
    if (childId) {
      deleteChild({ variables: { id: childId } });
    } else if (commentId) {
      // deleteComment({ variables: { commentId, momentId } });
    } else {
      // deleteMoment({ variables: { momentId } });
    }
  };

  return (
    <Button className="kl-card-delete" onClick={handleClick}>
      <Trash />
    </Button>
  );
};

export default DeleteButton;
