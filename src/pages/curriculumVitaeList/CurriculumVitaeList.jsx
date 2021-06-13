import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Icon,
  Image,
  Label,
  Popup,
  Rating,
  Segment,
} from "semantic-ui-react";
import CurriculumVitaeService from "../../services/curriculumVitaeService";
import LanguageService from "../../services/languageService";
import TechnologyKnowledgeService from "../../services/technologyKnowledgeService";

export default function CurriculumVitaeList() {
  const [curriculumVitaes, setCurriculumVitaes] = useState([]);
  useEffect(() => {
    let curriculumVitaeService = new CurriculumVitaeService();
    curriculumVitaeService
      .getCurriculumVitaes()
      .then((result) => setCurriculumVitaes(result.data.data));
  }, []);

  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    let languageService = new LanguageService();
    languageService
      .getLanguages()
      .then((result) => setLanguages(result.data.data));
  }, []);

  const [technologyKnowledges, setTechnologyKnowledges] = useState([]);
  useEffect(() => {
    let technologyKnowledgeService = new TechnologyKnowledgeService();
    technologyKnowledgeService
      .getTechnologyKnowledges()
      .then((result) => setTechnologyKnowledges(result.data.data));
  }, []);

  return (
    <div>
      <Segment raised padded textAlign="left">
        <Card.Group itemsPerRow={2}>
          {curriculumVitaes.map((curriculumVitae) => (
            <Card key={curriculumVitae.id}>
              <Card.Content>
                <Image
                  floated="left"
                  size="tiny"
                  src={curriculumVitae.photoLink}
                />
                <Card.Header>
                  {curriculumVitae.jobSeeker.firstName +
                    " " +
                    curriculumVitae.jobSeeker.lastName}
                </Card.Header>
                <Card.Meta textAlign="left">
                  <span>Created in {curriculumVitae.createDate}</span>
                </Card.Meta>
                <Segment basic floated="left" compact>
                  <Popup
                    trigger={
                      <Label icon="globe" content="Languages" color="blue" />
                    }
                  >
                    <Popup.Header>
                      <Icon name="globe" color="blue" />
                      Languages
                    </Popup.Header>
                    <Popup.Content>
                      {languages
                        .filter(
                          (language) =>
                            language.curriculumVitae.id === curriculumVitae.id
                        )
                        .map((language) => (
                          <Segment.Inline key={language.id}>
                            {language.name}
                            <Rating
                              disabled
                              rating={language.degree}
                              maxRating={5}
                            />
                          </Segment.Inline>
                        ))}
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
                      {technologyKnowledges
                        .filter(
                          (technologyKnowledge) =>
                            technologyKnowledge.curriculumVitae.id ===
                            curriculumVitae.id
                        )
                        .map((technologyKnowledge) => (
                          <Segment.Inline key={technologyKnowledge.id}>
                            {technologyKnowledge.name}
                          </Segment.Inline>
                        ))}
                    </Popup.Content>
                  </Popup>
                </Segment>

                <Card.Description textAlign="left">
                    <p>{curriculumVitae.description}</p>
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
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
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
      </Segment>
    </div>
  );
}
