import React, { useState, useEffect } from "react";
import {
  Container,
  Divider,
  Grid,
  Icon,
  Image,
  List,
  Rating,
  Segment,
  Tab,
} from "semantic-ui-react";
import LanguageService from "../../services/languageService";
import SchoolService from "../../services/schoolService";
import CurriculumVitaeService from "../../services/curriculumVitaeService";
import TechnologyKnowledgeService from "../../services/technologyKnowledgeService";
import WorkExperienceService from "../../services/workExperienceService";
import PersonalInfo from "./components/PersonalInfo";

export default function CurriculumVitaeDetailView() {
  const [currentCurriculumVitae, setCurrentCurriculumVitae] = useState({});
  useEffect(() => {
    let curriculumVitaeService = new CurriculumVitaeService();
    curriculumVitaeService
      .getCurriculumVitaes()
      .then((result) => setCurrentCurriculumVitae(result.data.data[0]));
  }, []);

  const [schools, setSchools] = useState([]);
  useEffect(() => {
    let schoolService = new SchoolService();
    schoolService.getSchools().then((result) => setSchools(result.data.data));
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

  const [workExperiences, setWorkExperiences] = useState([]);
  useEffect(() => {
    let workExperiencesService = new WorkExperienceService();
    workExperiencesService
      .getWorkExperiences()
      .then((result) => setWorkExperiences(result.data.data));
  }, []);

  

  const schoolsPane = {
    menuItem: { icon: "graduation", content: "Schools" },
    render: () => (
      <Tab.Pane>
        {schools
          .filter((school) => school.curriculumVitae.id === 1)
          .map((school) => (
            <div>
              <List animated key={school.id}>
                <List.Item icon="graduation" content={school.name} />
                <List.Item
                  icon="building outline"
                  content={school.department}
                />
                <List.Item
                  icon="calendar plus outline"
                  content={school.startDate}
                />
                <List.Item
                  icon="calendar check outline"
                  content={school.endDate}
                />
              </List>
              <Divider />
            </div>
          ))}
      </Tab.Pane>
    ),
  };

  const languagesPane = {
    menuItem: { icon: "world", content: "Languages" },
    render: () => (
      <Tab.Pane>
        {languages
          .filter((language) => language.curriculumVitae.id === 1)
          .map((language) => (
            <div>
              <List animated key={language.id}>
                <List.Item icon="world" content={language.name} />
                <List.Item>
                  <span>
                    <Icon name="level up" />
                    <Rating
                      maxRating={5}
                      defaultRating={language.degree}
                      disabled
                    />
                  </span>
                </List.Item>
              </List>
              <Divider />
            </div>
          ))}
      </Tab.Pane>
    ),
  };

  const workExperiencesPane = {
    menuItem:  { icon: "chart line", content: "Work Experiences" },
    render: () => (
      <Tab.Pane>
        {workExperiences
          .filter((workExperience) => workExperience.curriculumVitae.id === 1)
          .map((workExperience) => (
            <div>
              <List animated key={workExperience.id}>
                <List.Item
                  icon="map marker alternate"
                  content={workExperience.workPlaceName}
                />
                <List.Item
                  icon="dot circle outline"
                  content={workExperience.positionName}
                />
                <List.Item
                  icon="calendar plus outline"
                  content={workExperience.startDate}
                />
                <List.Item
                  icon="calendar check outline"
                  content={workExperience.endDate}
                />
              </List>
              <Divider />
            </div>
          ))}
      </Tab.Pane>
    ),
  };

  const technologyKnowledgesPane = {
    menuItem: { icon: "thumbtack", content: "Technology Knowledges" },
    render: () => (
      <Tab.Pane>
        {technologyKnowledges
          .filter(
            (technologyKnowledge) =>
              technologyKnowledge.curriculumVitae.id === 1
          )
          .map((technologyKnowledge) => (
            <div>
              <List animated>
                <List.Item
                  key={technologyKnowledge.id}
                  icon="thumbtack"
                  content={technologyKnowledge.name}
                />
              </List>
              <Divider />
            </div>
          ))}
      </Tab.Pane>
    ),
  };

  const panes = [
    schoolsPane,
    languagesPane,
    workExperiencesPane,
    technologyKnowledgesPane,
  ];

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
                
                <List animated verticalAlign="middle">
                  <List.Item>
                    <List.Icon
                      name="github"
                      size="large"
                      verticalAlign="middle"
                    />
                    <List.Content>
                      <a href={currentCurriculumVitae.githubLink}>
                        {currentCurriculumVitae.githubLink}
                      </a>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon
                      name="linkedin"
                      size="large"
                      verticalAlign="middle"
                    />
                    <List.Content>
                      <a href={currentCurriculumVitae.linkedinLink}>
                        {currentCurriculumVitae.linkedinLink}
                      </a>
                    </List.Content>
                  </List.Item>
                </List>
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
                <Tab activeIndex={0} menu={{ secondary: true, pointing: true }} panes={panes} />
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
