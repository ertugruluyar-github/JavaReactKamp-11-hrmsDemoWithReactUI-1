import React from "react";
import { Header, Segment, Form, Icon, Button } from "semantic-ui-react";
import PhotoAndPersonalInfoSegment from "./formSegments/PhotoAndPersonalInfoSegment";
import DescriptionSegment from "./formSegments/DescriptionSegment";
import SocialMediaSegment from "./formSegments/SocialMediaSegment";
import SchoolSegment from "./formSegments/SchoolSegment";

export default function CurriculumVitaeForm({
  headerIconName,
  headerContent,
  SubmitButtonIconName,
  SubmitButtonText,
  formik,
  currentCurriculumVitaeId
}) {
  return (
    <Segment padded raised>
      <Header
        dividing
        color="blue"
        icon={headerIconName}
        content={headerContent}
      />
      <Form onSubmit={formik.handleSubmit}>
        <PhotoAndPersonalInfoSegment formik={formik} />
        <DescriptionSegment formik={formik} />
        <SocialMediaSegment formik={formik} />
        <SchoolSegment currentCurriculumVitaeId={currentCurriculumVitaeId} />
        <Segment basic>
          <Form.Button type="submit" animated="fade" positive fluid>
            <Button.Content visible>
              <Icon name={SubmitButtonIconName} />
            </Button.Content>
            <Button.Content hidden>{SubmitButtonText}</Button.Content>
          </Form.Button>
        </Segment>
      </Form>
    </Segment>
  );
}
