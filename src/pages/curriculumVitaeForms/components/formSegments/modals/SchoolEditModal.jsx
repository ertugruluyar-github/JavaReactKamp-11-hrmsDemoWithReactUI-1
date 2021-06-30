import React from "react";
import { Button, Icon } from "semantic-ui-react";
import SchoolUpdateForm from "./../forms/school/SchoolUpdateForm";
import CustomModal from '../../../../../utilities/CustomModal';

export default function SchoolEditModal({ currentSchool }) {
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
      content={<SchoolUpdateForm currentSchool={currentSchool} />}
    />
  );
}
