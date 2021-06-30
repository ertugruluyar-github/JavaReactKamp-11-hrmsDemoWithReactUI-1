import React from "react";
import { Form, Segment, Icon, Button, Header } from "semantic-ui-react";

export default function LanguageForm({
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
        <Form.Group>
          <Form.Input
            id="name"
            name="name"
            label="Language"
            icon="world"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            error={formik.errors?.name}
            placeholder="English"
            width={8}
          />
          <Form.Input
            id="degree"
            name="degree"
            label="Degree"
            icon="level up"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.degree}
            error={formik.errors?.degree}
            placeholder="4"
            width={8}
          />
        </Form.Group>
        <Segment basic>
          <Form.Button
            type="button"
            onClick={formik.handleSubmit}
            //Galiba iç içe form olduğu için bu Form'a onSubmit verince
            //School'daki edit butonuna basınca bu form submit ediliyor.
            //Bu yüzden onclick ile yapıyorum.
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
