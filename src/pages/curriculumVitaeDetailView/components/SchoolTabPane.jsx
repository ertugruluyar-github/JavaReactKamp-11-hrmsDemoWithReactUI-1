import React, { useState, useEffect } from "react";
import { Divider, List, Tab } from "semantic-ui-react";
import SchoolService from "../../../services/schoolService";

export default function SchoolTabPane({ currentCurriculumVitaeId }) {
  const [schools, setSchools] = useState([]);
  useEffect(() => {
    let schoolService = new SchoolService();
    schoolService.getSchools().then((result) => setSchools(result.data.data));
  }, []);

  return (
    <Tab.Pane>
      {schools
        .filter(
          (school) => school.curriculumVitae.id === currentCurriculumVitaeId
        )
        .map((school) => (
          <div key={school.id}>
            <List animated key={school.id}>
              <List.Item icon="graduation" content={school.name} />
              <List.Item icon="building outline" content={school.department} />
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
  );
}
