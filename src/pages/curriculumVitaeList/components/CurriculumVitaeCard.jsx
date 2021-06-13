import React from "react";
import { Icon, Label } from "semantic-ui-react";

export default function CurriculumVitaeCard() {
  return (
    <div>
      <Card>
        <Card.Content>
          <Image floated="left" size="tiny" src="logo192.png" />
          <Card.Header>Ertuğrul Uyar</Card.Header>
          <Card.Meta content="Created in 06.06.2021" textAlign="left" />
          <Popup
            trigger={<Label icon="globe" content="Languages" color="blue" />}
          >
            <Popup.Header>User Rating</Popup.Header>
            <Popup.Content>
              <Rating icon="star" defaultRating={3} maxRating={4} />
            </Popup.Content>
          </Popup>

          <Card.Description textAlign="left">
            <p>
              Elliot is a sound engineer living in Nashville who enjoys playing
              guitar and hanging with his cat. Elliot is a sound engineer living
              in Nashville who enjoys playing guitar and hanging with his cat.
              Elliot is a sound engineer living in Nashville who enjoys playing
              guitar and hanging with his cat. Elliot is a sound engineer living
              in Nashville who enjoys playing guitar and hanging with his cat.
            </p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button.Group fluid>
            <Button color="blue" animated="fade">
              <Button.Content visible>
                <Icon name="arrow right" />
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
        </Card.Content>
      </Card>
    </div>
  );
}
