import React from "react";
import SchoolAddForm from "../../forms/school/SchoolAddForm";
import { Button, Icon } from "semantic-ui-react";
import CustomModal from '../../../../../../utilities/CustomModal';

export default function SchoolAddModal({ currentCurriculumVitaeId }) {
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
        <SchoolAddForm currentCurriculumVitaeId={currentCurriculumVitaeId} />
      }
      actions={<p>Çıkmak için beyaz bölgenin dışına tıklayabilirsiniz.</p>}
    />
  );
}
