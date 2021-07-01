import React from "react";
import { Header, Segment, Form, Icon, Button } from "semantic-ui-react";
import PersonalInfoSegment from "./formSegments/PersonalInfoSegment";
import UserInfoSegment from "./formSegments/UserInfoSegment";

export default function SystemEmployeeForm({
  headerIconName,
  headerContent,
  SubmitButtonIconName,
  SubmitButtonText,
  formik,
}) {
  return (
    <Segment padded raised>
      <Header
        dividing
        color="blue"
        icon={headerIconName}
        content={headerContent}
      />
      <Form>
        <PersonalInfoSegment formik={formik} />
        <UserInfoSegment formik={formik} />
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
      </Form>
    </Segment>
  );
}
