import React from "react";
import {
  Segment,
  Icon,
  Grid,
  Image,
  Reveal,
} from "semantic-ui-react";
import PersonalInfo from "./../../../curriculumVitaeDetailView/components/PersonalInfo";

export default function PhotoAndPersonalInfoSegment({ formik }) {
  return (
    <Segment padded raised>
      <Grid>
        <Grid.Row>
          <Grid.Column width={6}>
            <Reveal animated="fade">
              <Reveal.Content visible>
                <Image size="medium" centered src={formik.values.photoLink} />
                <input
                  id="photoLink"
                  name="photoLink"
                  type="file"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  accept=".png, .jpg, .jpeg"
                  //formEncType="multipart/file"
                  datatype="multipart/file"
                />
              </Reveal.Content>
              <Reveal.Content hidden>
                
              </Reveal.Content>
            </Reveal>
          </Grid.Column>
          <Grid.Column width={10}>
            <PersonalInfo currentjobSeeker={formik.values.jobSeeker} />
            <Icon name="info circle" color="blue" />
            Bu bilgileri güncellemek için profilinizi güncellemeniz yeterlidir.
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
