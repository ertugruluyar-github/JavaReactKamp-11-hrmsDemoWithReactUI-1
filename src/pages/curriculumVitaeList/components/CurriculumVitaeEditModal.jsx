import React, { useState } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";
import CurriculumVitaeUpdateForm from "./../../curriculumVitaeForms/CurriculumVitaeUpdateForm";

export default function CurriculumVitaeEditModal({ currentCurriculumVitae }) {
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
        <CurriculumVitaeUpdateForm
          currentCurriculumVitae={currentCurriculumVitae}
        />
      </Modal.Content>
      <Modal.Actions>
        <p>Çıkmak için beyaz bölgenin dışına tıklayabilirsiniz.</p>
      </Modal.Actions>
    </Modal>
  );
}
