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
        <Form.Input
          id="name"
          name="name"
          label="Technology Knowledge"
          icon="thumbtack"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          error={formik.errors?.name}
          placeholder="Java"
          width={16}
        />
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
