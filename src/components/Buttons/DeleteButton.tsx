import React from "react";
import { Button } from "react-bootstrap";
import { Trash } from "react-feather";
import { useDeleteChild } from "../../graphql/children";
import { useDeleteMoment } from "../../graphql/moments";

const DeleteButton: React.FC<{ childId: string | null; momentId: string | null; commentId: string | null }> = ({
  childId,
  momentId,
  commentId,
}) => {
  const deleteChild = useDeleteChild();
  const deleteMoment = useDeleteMoment();

  console.log(childId, momentId, commentId);

  // TODO: add confirmation modal
  const handleClick = () => {
    if (childId) {
      deleteChild({ variables: { id: childId } });
    } else if (commentId) {
      // deleteComment({ variables: { commentId, momentId } });
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
