import React, { useState, useEffect } from "react";
import { Icon, Label, Popup, Rating, Segment } from "semantic-ui-react";
import LanguageService from "./../../../services/languageService";

export default function LanguagesPopup({ curriculumVitaeId }) {
  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    let languageService = new LanguageService();
    languageService
      .getLanguages()
      .then((result) => setLanguages(result.data.data));
  }, []);

  return (
    <Popup trigger={<Label icon="globe" content="Languages" color="blue" />}>
      <Popup.Header>
        <Icon name="globe" color="blue" />
        Languages
      </Popup.Header>
      <Popup.Content>
        {languages
          .filter(
            (language) => language.curriculumVitae.id === curriculumVitaeId
          )
          .map((language) => (
            <Segment.Inline key={language.id}>
              {language.name}
              <Rating disabled rating={language.degree} maxRating={5} />
            </Segment.Inline>
          ))}
      </Popup.Content>
    </Popup>
  );
}
