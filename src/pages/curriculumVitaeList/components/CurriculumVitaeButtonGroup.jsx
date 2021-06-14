import React from "react";
import { Button, Icon } from 'semantic-ui-react';

export default function CurriculumVitaeButtonGroup() {
  return (
      <Button.Group fluid>
        <Button color="blue" animated="fade">
          <Button.Content visible>
            <Icon name="eye" />
          </Button.Content>
          <Button.Content hidden>View Detail</Button.Content>
        </Button>
        <Button.Or />
        <Button color="orange" animated="fade">
          <Button.Content visible>
            <Icon name="edit" />
          </Button.Content>
          <Button.Content hidden>Edit</Button.Content>
        </Button>
        <Button.Or />
        <Button color="red" animated="fade">
          <Button.Content visible>
            <Icon name="trash" />
          </Button.Content>
          <Button.Content hidden>Delete</Button.Content>
        </Button>
      </Button.Group>
  );
}
