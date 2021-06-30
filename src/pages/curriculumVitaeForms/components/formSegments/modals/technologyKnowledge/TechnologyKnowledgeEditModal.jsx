import React from "react";
import { Button, Icon } from "semantic-ui-react";
import TechnologyKnowledgeUpdateForm from "../../forms/technologyKnowledge/TechnologyKnowledgeUpdateForm";
import CustomModal from "../../../../../../utilities/CustomModal";

export default function TechnologyKnowledgeEditModal({
  currentTechnologyKnowledge,
}) {
  return (
    <CustomModal
      trigger={
        <Button color="orange" animated="fade" circular>
          <Button.Content visible>
            <Icon name="edit" />
          </Button.Content>
          <Button.Content hidden>Edit</Button.Content>
        </Button>
      }
      content={
        <TechnologyKnowledgeUpdateForm
          currentTechnologyKnowledge={currentTechnologyKnowledge}
        />
      }
      actions={<p>Çıkmak için beyaz bölgenin dışına tıklayabilirsiniz.</p>}
    />
  );
}
