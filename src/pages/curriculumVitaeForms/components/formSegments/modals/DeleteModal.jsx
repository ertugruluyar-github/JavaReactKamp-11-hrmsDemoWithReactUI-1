import React from "react";
import CustomModal from "../../../../../utilities/CustomModal";
import { Button, Icon, Header } from "semantic-ui-react";
import { toast } from "react-toastify";

export default function DeleteModal({ service, entityId }) {
  let handleDelete = () => {
    service.delete(entityId).then(toast.success("Deleted successfully."));
  };
  return (
    <CustomModal
      trigger={
        <Button negative animated="fade" circular>
          <Button.Content visible>
            <Icon name="delete" />
          </Button.Content>
          <Button.Content hidden>Delete</Button.Content>
        </Button>
      }
      content={
        <>
          <Header
            content="Are you sure about delete this?"
            color="red"
            as="h3"
          />
          <Header
            content="Çıkmak için beyaz bölgenin dışına tıklayabilirsiniz."
            color="grey"
            as="h4"
          />
        </>
      }
      actions={
        <Button positive animated="fade" circular onClick={handleDelete}>
          <Button.Content visible>
            <Icon name="check" />
          </Button.Content>
          <Button.Content hidden>Evet</Button.Content>
        </Button>
      }
    />
  );
}
