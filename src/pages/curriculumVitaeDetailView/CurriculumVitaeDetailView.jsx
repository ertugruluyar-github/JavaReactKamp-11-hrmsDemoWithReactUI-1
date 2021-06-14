import React, { useState, useEffect } from "react";
import { Container, Grid, Image, Segment } from "semantic-ui-react";

import CurriculumVitaeService from "../../services/curriculumVitaeService";
import PersonalInfo from "./components/PersonalInfo";
import SocialMediaList from "./components/SocialMediaList";
import TabPanes from "./components/TabPanes";

export default function CurriculumVitaeDetailView() {
  const [currentCurriculumVitae, setCurrentCurriculumVitae] = useState({});
  useEffect(() => {
    let curriculumVitaeService = new CurriculumVitaeService();
    curriculumVitaeService
      .getCurriculumVitaes()
      .then((result) => setCurrentCurriculumVitae(result.data.data[0]));
  }, []);

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
                <p>{currentCurriculumVitae.description}</p>
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
