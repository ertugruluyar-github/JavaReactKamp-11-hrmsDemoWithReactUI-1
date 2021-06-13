import React from "react";

export default function CurriculumVitaeInfo() {
  return (
    <div>
      <Card.Content>
        <Image floated="left" size="tiny" src="logo192.png" />
        <Card.Header>Ertuğrul Uyar</Card.Header>
        <Card.Meta content="Created in 06.06.2021" textAlign="left" />
        <Segment basic floated="left" compact>
          <Popup
            trigger={<Label icon="globe" content="Languages" color="blue" />}
          >
            <Popup.Header>
              <Icon name="globe" color="blue" />
              Languages
            </Popup.Header>
            <Popup.Content>
              <Segment.Inline>
                English
                <Rating disabled defaultRating={3} maxRating={5} />
              </Segment.Inline>
              <Segment.Inline>
                French
                <Rating disabled defaultRating={2} maxRating={5} />
              </Segment.Inline>
            </Popup.Content>
          </Popup>
          <Popup
            trigger={
              <Label
                icon="thumbtack"
                content="Technology Knowledges"
                color="blue"
              />
            }
          >
            <Popup.Header>
              <Icon name="thumbtack" color="blue" />
              Technology Knowledges
            </Popup.Header>
            <Popup.Content>
              <Segment.Inline>Java Developer</Segment.Inline>
              <Segment.Inline>Software Developer</Segment.Inline>
            </Popup.Content>
          </Popup>
        </Segment>
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
    </div>
  );
}
