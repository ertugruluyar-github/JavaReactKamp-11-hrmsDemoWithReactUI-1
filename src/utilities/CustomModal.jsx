import React, { useState } from "react";
import { Modal } from "semantic-ui-react";

export default function CustomModal({ trigger, content, actions }) {
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
      trigger={trigger}
    >
      <Modal.Content>{content}</Modal.Content>
      <Modal.Actions>{actions}</Modal.Actions>
    </Modal>
  );
}
