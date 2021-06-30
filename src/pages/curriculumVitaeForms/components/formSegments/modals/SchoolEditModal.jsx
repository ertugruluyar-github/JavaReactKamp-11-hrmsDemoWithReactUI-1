import React, { useState } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";
import SchoolUpdateForm from './../forms/school/SchoolUpdateForm';

export default function SchoolEditModal({ currentSchool }) {
  const [open, setOpen] = useState(false);

  let showModel = () => {
    setOpen(true);
  };
  let closeModel = () => {
    setOpen(false);
  };

  return (
    <Modal
      onClose={() => closeModel()}
      onOpen={() => showModel()}
      open={open}
      trigger={
        <Button color="orange" animated="fade">
          <Button.Content visible>
            <Icon name="edit" />
          </Button.Content>
          <Button.Content hidden>Edit</Button.Content>
        </Button>
      }
    >
      <Modal.Content>
        <SchoolUpdateForm currentSchool={currentSchool} />
      </Modal.Content>
      <Modal.Actions>
        <p>Çıkmak için beyaz bölgenin dışına tıklayabilirsiniz.</p>
      </Modal.Actions>
    </Modal>
  );
}
