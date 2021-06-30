import React from "react";
import CustomModal from "../../../../../utilities/CustomModal";
import { Button, Icon, Header } from "semantic-ui-react";
import { toast } from 'react-toastify';

export default function DeleteModal(service, entity) {
  let handleDelete = () => {
    service.delete(entity).then(
      toast.success("Deleted successfully.")
    )
  };
  return (
    <CustomModal
      trigger={
        <Button negative animated="fade" circular onClick={handleDelete}>
          <Button.Content visible>
            <Icon name="delete" />
          </Button.Content>
          <Button.Content hidden>Delete</Button.Content>
        </Button>
      }
      content={<Header content="Are you sure about delete this?" color="red" />}
    />
  );
}
