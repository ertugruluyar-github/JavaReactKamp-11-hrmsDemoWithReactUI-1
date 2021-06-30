import React from "react";
import CustomModal from '../../../../../utilities/CustomModal';
import SchoolAddForm from './../forms/school/SchoolAddForm';
import { Button, Icon } from 'semantic-ui-react';

export default function SchoolAddModal() {
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
      content={<SchoolAddForm />}
    />
  );
}
