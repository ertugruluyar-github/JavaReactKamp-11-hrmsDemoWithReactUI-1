import React from "react";
import { Button, Icon } from "semantic-ui-react";
import WorkExperienceUpdateForm from '../../forms/workExperience/WorkExperienceUpdateForm';
import CustomModal from '../../../../../../utilities/CustomModal';

export default function WorkExperienceEditModal({ currentWorkExperience }) {
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
      content={<WorkExperienceUpdateForm currentWorkExperience={currentWorkExperience} />}
      actions={<p>Çıkmak için beyaz bölgenin dışına tıklayabilirsiniz.</p>}
    />
  );
}
