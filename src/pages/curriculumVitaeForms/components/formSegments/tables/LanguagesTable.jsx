import React, { useEffect, useState } from "react";
import { Header, Segment, Table, Icon, Label } from "semantic-ui-react";
import LanguageEditModal from "./../modals/language/LanguageEditModal";
import LanguageService from "./../../../../../services/languageService";
import LanguageAddModal from "./../modals/language/LanguageAddModal";
import DeleteModal from './../../../../../utilities/DeleteModal';

export default function LanguagesTable({ currentCurriculumVitaeId }) {
  const [currentLanguages, setCurrentLanguages] = useState([
    {
      name: "",
      degree: "",
      curriculumVitae: { id: "" },
    },
  ]);

  useEffect(() => {
    let languageService = new LanguageService();

    languageService
      .getAll()
      .then((result) =>
        setCurrentLanguages(
          result.data.data.filter(
            (language) => language.curriculumVitae.id === currentCurriculumVitaeId
          )
        )
      );
  }, [currentCurriculumVitaeId]);
  return (
    <Segment raised padded>
      <Header
        dividing
        color="blue"
        textAlign="right"
        icon="world"
        content="Language List"
      />
      <Table verticalAlign="middle" padded celled selectable>
        <Table.Header>
          <Table.Row textAlign="center">
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Degree</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {currentLanguages.map((language, index) => (
            <Table.Row textAlign="center" key={index}>
              <Table.Cell>
                <LanguageEditModal currentLanguage={language} />
              </Table.Cell>
              <Table.Cell>{language.name}</Table.Cell>
              <Table.Cell>{language.degree}</Table.Cell>
              <Table.Cell>
                <DeleteModal
                  service={new LanguageService()}
                  entityId={language.id}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="6">
              <Segment floated="left">
                <Icon name="info circle" color="blue" size="large" />
                <span>{currentLanguages.length} languages listed.</span>
              </Segment>
              <Label tag color="olive">
                <LanguageAddModal
                  currentCurriculumVitaeId={currentCurriculumVitaeId}
                />
              </Label>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment>
  );
}
