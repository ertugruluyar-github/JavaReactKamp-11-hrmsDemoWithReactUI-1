import React from "react";
import TechnologyKnowledgeAddForm from "../../forms/technologyKnowledge/TechnologyKnowledgeAddForm";
import { Button, Icon } from "semantic-ui-react";
import CustomModal from "../../../../../../utilities/CustomModal";

export default function TechnologyKnowledgeAddModal({
  currentCurriculumVitaeId,
}) {
  return (
    <CustomModal
      trigger={
        <Button color="olive" animated="fade" circular>
          <Button.Content visible>
            <Icon name="add" />
          </Button.Content>
          <Button.Content hidden>Add</Button.Content>
        </Button>
      }
      content={
        <TechnologyKnowledgeAddForm
          currentCurriculumVitaeId={currentCurriculumVitaeId}
        />
      }
      actions={<p>Çıkmak için beyaz bölgenin dışına tıklayabilirsiniz.</p>}
    />
  );
}
