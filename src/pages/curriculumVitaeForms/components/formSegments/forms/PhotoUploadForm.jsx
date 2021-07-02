import React from "react";
import { Header, Image, Segment, Form, Button, Icon } from "semantic-ui-react";

export default function PhotoUploadForm({ formik }) {
  return (
    <Segment>
      <Header dividing color="blue" icon="camera" content="Upload Photo" />
      <Form.Group>
        <input
          id="photoLink"
          name="photoLink"
          type="file"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          accept=".png, .jpg, .jpeg"
          //formEncType="multipart/form-data"
          //datatype="multipart/file"
        />
        <Image
          size="medium"
          centered
          src={formik.values.photoLink}
          label={formik.values.photoLink}
        />
      </Form.Group>

      <Segment basic>
        <Form.Button
          type="button"
          onClick={formik.handleSubmit}
          animated="fade"
          positive
          fluid
        >
          <Button.Content visible>
            <Icon name="save" />
          </Button.Content>
          <Button.Content hidden>Save</Button.Content>
        </Form.Button>
      </Segment>
    </Segment>
  );
}
