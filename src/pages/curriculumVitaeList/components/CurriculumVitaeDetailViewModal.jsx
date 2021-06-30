import React from "react";
import { Button, Icon } from "semantic-ui-react";
import CurriculumVitaeDetailView from "../../curriculumVitaeDetailView/CurriculumVitaeDetailView";
import CustomModal from "./../../../utilities/CustomModal";

export default function CurriculumVitaeDetailViewModal({
  currentCurriculumVitae,
}) {
  return (
    <CustomModal
      trigger={
        <Button color="blue" animated="fade">
          <Button.Content visible>
            <Icon name="eye" />
          </Button.Content>
          <Button.Content hidden>View Detail</Button.Content>
        </Button>
      }
      content={
        <CurriculumVitaeDetailView
          currentCurriculumVitae={currentCurriculumVitae}
        />
      }
      actions={<p>Çıkmak için beyaz bölgenin dışına tıklayabilirsiniz.</p>}
    />
  );
}
