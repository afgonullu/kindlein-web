import React from "react";
import { Button } from "react-bootstrap";
import { Trash } from "react-feather";
import { useDeleteChild } from "../../graphql/children";
import { useDeleteMoment } from "../../graphql/moments";
import { useDeleteComment } from "../../graphql/comments";

const DeleteButton: React.FC<{
  childId: string | undefined;
  momentId: string | undefined;
  commentId: string | undefined;
}> = ({ childId, momentId, commentId }) => {
  const deleteChild = useDeleteChild();
  const deleteMoment = useDeleteMoment();
  const deleteComment = useDeleteComment();

  // TODO: add confirmation modal
  const handleClick = () => {
    if (childId) {
      deleteChild({ variables: { id: childId } });
    } else if (commentId) {
      deleteComment({ variables: { id: commentId, momentId } });
    } else {
      deleteMoment({ variables: { id: momentId } });
    }
  };

  return (
    <Button className="kl-card-delete" onClick={handleClick}>
      <Trash size="24" />
    </Button>
  );
};

export default DeleteButton;
