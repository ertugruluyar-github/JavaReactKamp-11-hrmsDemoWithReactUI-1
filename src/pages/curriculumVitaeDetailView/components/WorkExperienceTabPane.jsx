import React, { useState, useEffect } from "react";
import { Divider, List, Tab } from "semantic-ui-react";
import WorkExperienceService from "../../../services/workExperienceService";

export default function WorkExperienceTabPane({ currentCurriculumVitaeId }) {
  const [workExperiences, setWorkExperiences] = useState([]);
  useEffect(() => {
    let workExperiencesService = new WorkExperienceService();
    workExperiencesService
      .getAll()
      .then((result) => setWorkExperiences(result.data.data));
  }, []);

  return (
    <Tab.Pane>
      {workExperiences
        .filter(
          (workExperience) =>
            workExperience.curriculumVitae.id === currentCurriculumVitaeId
        )
        .map((workExperience) => (
          <div key={workExperience.id}>
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
  );
}
