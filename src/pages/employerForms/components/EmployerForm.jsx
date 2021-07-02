import React, { useState } from "react";
import { Header, Segment, Form, Icon, Button, Label } from "semantic-ui-react";
import CompanyInfoSegment from "./formSegments/CompanyInfoSegment";
import UserInfoSegment from "./formSegments/UserInfoSegment";
import employerInitialValues from "./employerInitialValues";

export default function EmployerForm({
  headerIconName,
  headerContent,
  submitButtonIconName,
  submitButtonText,
  formik,
  currentEmployer,
}) {
  const [isVisibleInfo, setIsVisibleInfo] = useState(false);
  let handleIsVisibleInfo = () => {
    if (isVisibleInfo) {
      formik.setValues(employerInitialValues);
      setIsVisibleInfo(false);
    } else {
      formik.setValues(currentEmployer);
      setIsVisibleInfo(true);
    }
  };
  return (
    <Segment padded raised>
      <Header
        dividing
        color="blue"
        icon={headerIconName}
        content={headerContent}
      />
      <Form>
        <CompanyInfoSegment formik={formik} />
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
              <Icon name={submitButtonIconName} />
            </Button.Content>
            <Button.Content hidden>{submitButtonText}</Button.Content>
          </Form.Button>
        </Segment>
      </Form>
      <Label
        onClick={handleIsVisibleInfo}
        icon={
          <Icon
            name={isVisibleInfo ? "eye slash" : "eye"}
            color={isVisibleInfo ? "red" : "blue"}
            fitted
          />
        }
        floating
        circular
      />
    </Segment>
  );
}