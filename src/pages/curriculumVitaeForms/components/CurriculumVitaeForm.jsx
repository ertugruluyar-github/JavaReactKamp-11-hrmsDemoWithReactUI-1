import React from "react";
import { Header, Segment, Form, Icon, Button } from "semantic-ui-react";
import PhotoAndPersonalInfoSegment from "./formSegments/PhotoAndPersonalInfoSegment";
import DescriptionSegment from "./formSegments/DescriptionSegment";
import SocialMediaSegment from "./formSegments/SocialMediaSegment";
import SchoolSegment from "./formSegments/SchoolSegment";
import LanguageSegment from "./formSegments/LanguageSegment";
import WorkExperienceSegment from "./formSegments/WorkExperienceSegment";
import TechnologyKnowledgeSegment from "./formSegments/TechnologyKnowledgeSegment";

export default function CurriculumVitaeForm({
  headerIconName,
  headerContent,
  SubmitButtonIconName,
  SubmitButtonText,
  formik,
  currentCurriculumVitaeId,
}) {
  return (
    <Segment padded raised>
      <Header
        dividing
        color="blue"
        icon={headerIconName}
        content={headerContent}
      />
      <form className="ui form" encType="multipart/form-data">
        <PhotoAndPersonalInfoSegment formik={formik} />
        <DescriptionSegment formik={formik} />
        <SocialMediaSegment formik={formik} />
        <SchoolSegment currentCurriculumVitaeId={currentCurriculumVitaeId} />
        <LanguageSegment currentCurriculumVitaeId={currentCurriculumVitaeId} />
        <WorkExperienceSegment
          currentCurriculumVitaeId={currentCurriculumVitaeId}
        />
        <TechnologyKnowledgeSegment
          currentCurriculumVitaeId={currentCurriculumVitaeId}
        />
        <Segment basic>
          <Form.Button
            type="button"
            onClick={formik.handleSubmit}
            animated="fade"
            positive
            fluid
          >
            <Button.Content visible>
              <Icon name={SubmitButtonIconName} />
            </Button.Content>
            <Button.Content hidden>{SubmitButtonText}</Button.Content>
          </Form.Button>
        </Segment>
      </form>
    </Segment>
  );
}
