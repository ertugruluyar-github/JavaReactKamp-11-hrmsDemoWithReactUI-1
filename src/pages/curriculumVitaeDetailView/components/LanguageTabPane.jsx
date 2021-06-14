import React, { useState, useEffect } from "react";
import { Divider, Icon, List, Rating, Tab } from "semantic-ui-react";
import LanguageService from './../../../services/languageService';

export default function LanguageTabPane({ currentCurriculumVitaeId }) {
  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    let languageService = new LanguageService();
    languageService
      .getLanguages()
      .then((result) => setLanguages(result.data.data));
  }, []);

  return (
    <Tab.Pane>
      {languages
        .filter(
          (language) => language.curriculumVitae.id === currentCurriculumVitaeId
        )
        .map((language) => (
          <div key={language.id}>
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
  );
}
