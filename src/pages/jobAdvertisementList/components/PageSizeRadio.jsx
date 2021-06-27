import React from "react";
import { Form, Radio } from 'semantic-ui-react';

export default function PageSizeRadio({label, name, value, checked, handleChange }) {
  return (
    <Form.Field>
      <Radio
        label={label}
        name={name}
        value={value}
        checked={checked}
        onChange={handleChange}
      />
    </Form.Field>
  );
}
