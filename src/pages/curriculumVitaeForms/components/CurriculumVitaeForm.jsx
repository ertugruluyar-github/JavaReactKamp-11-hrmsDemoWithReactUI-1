import React from "react";
import {
  Header,
  Segment,
  Form,
  Icon,
  Button,
  Image,
  Grid,
} from "semantic-ui-react";
import PersonalInfo from "./../../curriculumVitaeDetailView/components/PersonalInfo";

export default function CurriculumVitaeForm({
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
        <Segment padded raised>
          <Grid>
            <Grid.Row>
              <Grid.Column width={6}>
                <Image
                  floated
                  size="medium"
                  centered
                  src={formik.values.photoLink}
                />
              </Grid.Column>
              <Grid.Column width={10}>
                <PersonalInfo currentjobSeeker={formik.values.jobSeeker} />
                <Icon name="info circle" color="blue" />
                Bu bilgileri güncellemek için profilinizi güncellemeniz
                yeterlidir.
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment padded raised>
          <Form.TextArea
            id="description"
            name="description"
            label="Description"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            error={formik.errors.description}
            placeholder="Tell us your curriculum vitae description."
          />
        </Segment>
        <Segment padded raised>
          <Form.Group>
            <Form.Input
              id="githubLink"
              name="githubLink"
              label="Github"
              icon="github"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.githubLink}
              placeholder="https://github.com/username"
              width={8}
            />
            <Form.Input
              id="linkedinLink"
              name="linkedinLink"
              label="LinkedIn"
              icon="linkedin"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.linkedinLink}
              error={formik.errors.linkedinLink}
              placeholder="https://www.linkedin.com/in/username"
              width={8}
            />
          </Form.Group>
        </Segment>
        <Segment padded raised>
          <Form.Group>
            <Form.Input
              id="school"
              name="school"
              label="School"
              icon="graduation"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.githubLink}
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
              value={formik.values.linkedinLink}
              error={formik.errors.linkedinLink}
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
              value={formik.values.githubLink}
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
              value={formik.values.linkedinLink}
              error={formik.errors.linkedinLink}
              width={8}
            />
          </Form.Group>
        </Segment>
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
