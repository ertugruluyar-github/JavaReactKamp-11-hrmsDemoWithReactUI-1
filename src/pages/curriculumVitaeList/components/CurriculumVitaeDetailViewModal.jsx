import React, { useState } from "react";
import { Button, Modal, Container, Icon } from "semantic-ui-react";
import CurriculumVitaeDetailView from "../../curriculumVitaeDetailView/CurriculumVitaeDetailView";

export default function CurriculumVitaeDetailViewModal({ curriculumVitae }) {
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
        <Button color="blue" animated="fade">
          <Button.Content visible>
            <Icon name="eye" />
          </Button.Content>
          <Button.Content hidden>View Detail</Button.Content>
        </Button>
      }
    >
      <Modal.Header><Container textAlign="center" >Curriculum Vitae</Container></Modal.Header>
      <Modal.Content>
        <CurriculumVitaeDetailView currentCurriculumVitae={curriculumVitae} />
      </Modal.Content>
      <Modal.Actions>
        <p>Çıkmak için beyaz bölgenin dışına tıklayabilirsiniz.</p>
      </Modal.Actions>
    </Modal>
  );
}
