import React, { useState } from "react";
import { Button, Modal, Icon } from "semantic-ui-react";
import CurriculumVitaeUpdateForm from "./../../curriculumVitaeForms/CurriculumVitaeUpdateForm";

export default function CurriculumVitaeEditModal({ currentCurriculumVitae }) {
  /*
  const [currentLanguages, setCurrentLanguages] = useState([]);
  const [currentWorkExperiences, setCurrentWorkExperiences] = useState([]);
  const [currentTechnologyKnowledges, setCurrentTechnologyKnowledges] =
    useState([]);

  useEffect(() => {
    let languageService = new LanguageService();
    let workExperienceService = new WorkExperienceService();
    let technologyKnowledgeService = new TechnologyKnowledgeService();

    languageService
      .getLanguages()
      .then((result) =>
        setCurrentLanguages(
          result.data.data.filter(
            (language) =>
              language.curriculumVitae.id === currentCurriculumVitae.id
          )
        )
      );

    workExperienceService
      .getWorkExperiences()
      .then((result) =>
        setCurrentWorkExperiences(
          result.data.data.filter(
            (workExperience) =>
              workExperience.curriculumVitae.id === currentCurriculumVitae.id
          )
        )
      );

    technologyKnowledgeService
      .getTechnologyKnowledges()
      .then((result) =>
        setCurrentTechnologyKnowledges(
          result.data.data.filter(
            (technologyKnowledge) =>
              technologyKnowledge.curriculumVitae.id ===
              currentCurriculumVitae.id
          )
        )
      );
  }, [currentCurriculumVitae.id]);
*/
  const [open, setOpen] = useState(false);

  let showModel = () => {
    setOpen(true);
  };
  let closeModel = () => {
    setOpen(false);
  };

  return (
    <Modal
      onClose={() => closeModel()}
      onOpen={() => showModel()}
      open={open}
      trigger={
        <Button color="orange" animated="fade">
          <Button.Content visible>
            <Icon name="edit" />
          </Button.Content>
          <Button.Content hidden>Edit</Button.Content>
        </Button>
      }
    >
      <Modal.Content>
        <CurriculumVitaeUpdateForm
          currentCurriculumVitae={currentCurriculumVitae}
        />
      </Modal.Content>
      <Modal.Actions>
        <p>Çıkmak için beyaz bölgenin dışına tıklayabilirsiniz.</p>
      </Modal.Actions>
    </Modal>
  );
}
