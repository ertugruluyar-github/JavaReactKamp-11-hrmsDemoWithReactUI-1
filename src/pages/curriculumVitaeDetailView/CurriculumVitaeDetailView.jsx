import React from "react";
import { Container, Grid, Image, Segment } from "semantic-ui-react";

import PersonalInfo from "./components/PersonalInfo";
import SocialMediaList from "./components/SocialMediaList";
import TabPanes from "./components/TabPanes";

export default function CurriculumVitaeDetailView({ currentCurriculumVitae }) {
  return (
    <div>
      <Segment raised piled padded>
        <Grid>
          <Grid.Row>
            <Grid.Column width={6}>
              <Segment raised>
                <Image
                  size="medium"
                  centered
                  src={currentCurriculumVitae.photoLink}
                />
              </Segment>
            </Grid.Column>
            <Grid.Column textAlign="left" width={10}>
              <Segment raised textAlign="left">
                <PersonalInfo />
              </Segment>
              <Segment raised textAlign="left">
                <SocialMediaList
                  currentCurriculumVitae={currentCurriculumVitae}
                />
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16}>
              <Segment raised padded textAlign="left">
                <p style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>{currentCurriculumVitae.description}</p>
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16}>
              <Segment raised padded textAlign="left">
                <TabPanes
                  currentCurriculumVitaeId={currentCurriculumVitae.id}
                />
              </Segment>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column width={16}>
              <Container
                content={"Created in " + currentCurriculumVitae.createDate}
                textAlign="center"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}
