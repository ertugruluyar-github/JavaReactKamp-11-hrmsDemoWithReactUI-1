import React from "react";
import { Tab } from "semantic-ui-react";
import SchoolTabPane from "./SchoolTabPane";
import LanguageTabPane from "./LanguageTabPane";
import TechnologyKnowledgeTabPane from "./TechnologyKnowledgeTabPane";
import WorkExperienceTabPane from './WorkExperienceTabPane';

export default function TabPanes({ currentCurriculumVitaeId }) {
  const schoolsPane = {
    menuItem: { key:0, icon: "graduation", content: "Schools" },
    render: () => (
      <SchoolTabPane currentCurriculumVitaeId={currentCurriculumVitaeId} />
    ),
  };

  const languagesPane = {
    menuItem: { key:1, icon: "world", content: "Languages" },
    render: () => (
      <LanguageTabPane currentCurriculumVitaeId={currentCurriculumVitaeId} />
    ),
  };

  const workExperiencesPane = {
    menuItem: { key:2, icon: "chart line", content: "Work Experiences" },
    render: () => <WorkExperienceTabPane currentCurriculumVitaeId={currentCurriculumVitaeId} />,
  };

  const technologyKnowledgesPane = {
    menuItem: { key:3, icon: "thumbtack", content: "Technology Knowledges" },
    render: () => (
      <TechnologyKnowledgeTabPane
        currentCurriculumVitaeId={currentCurriculumVitaeId}
      />
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
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    </div>
  );
}
