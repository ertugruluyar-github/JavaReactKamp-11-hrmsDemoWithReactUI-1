import React from "react";
import { Form, Radio } from "semantic-ui-react";
import { Label } from "semantic-ui-react";

export default function PageSizeRadio({
  label,
  name,
  value,
  checked,
  handleChange,
}) {
  return (
    <Form.Field style={{ cursor: "pointer" }}>
      <Radio
        label={
          checked ? (
            <Label basic circular color="teal" content={label} />
          ) : (
            <Label basic circular content={label} />
          )
        }
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
      />
    </Form.Field>
  );
}
