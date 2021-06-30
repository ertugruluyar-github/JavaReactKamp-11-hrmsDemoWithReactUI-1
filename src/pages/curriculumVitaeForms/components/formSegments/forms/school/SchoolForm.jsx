import React from "react";
import { Form, Segment, Icon, Button, Header } from "semantic-ui-react";

export default function SchoolForm({
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
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Input
            id="name"
            name="name"
            label="School"
            icon="graduation"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            error={formik.errors?.name}
            placeholder="Necmettin Erbakan University"
            width={8}
          />
          <Form.Input
            id="department"
            name="department"
            label="Department"
            icon="building outline"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.department}
            placeholder="Math Teacher"
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
            width={8}
          />
        </Form.Group>
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
