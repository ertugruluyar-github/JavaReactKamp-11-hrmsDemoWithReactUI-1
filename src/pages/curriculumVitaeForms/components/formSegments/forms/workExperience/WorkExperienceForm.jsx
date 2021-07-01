import React from "react";
import { Form, Segment, Icon, Button, Header } from "semantic-ui-react";

export default function WorkExperienceForm({
  headerIconName,
  headerContent,
  submitButtonIconName,
  submitButtonText,
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
        <Form.Group>
          <Form.Input
            id="workPlaceName"
            name="workPlaceName"
            label="Work Experience Name"
            icon="map marker alternate"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.workPlaceName}
            error={formik.errors?.workPlaceName}
            placeholder="Google"
            width={8}
          />
          <Form.Input
            id="positionName"
            name="positionName"
            label="Position Name"
            icon="dot circle outline"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.positionName}
            error={formik.errors?.positionName}
            placeholder="Software Developer"
            width={8}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            id="startDate"
            name="startDate"
            label="Start Date"
            icon="calendar plus outline"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.startDate}
            error={formik.errors?.startDate}
            width={8}
          />
          <Form.Input
            id="endDate"
            name="endDate"
            label="End Date"
            icon="calendar check outline"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.endDate}
            error={formik.errors?.endDate}
            width={8}
          />
        </Form.Group>
        <Segment basic>
          <Form.Button
            type="button"
            onClick={formik.handleSubmit}
            //Galiba iç içe form olduğu için bu Form'a onSubmit verince
            //workExperience'daki edit butonuna basınca bu form submit ediliyor.
            //Bu yüzden onclick ile yapıyorum.
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
    </Segment>
  );
}
