import React from "react";
import { Form } from "semantic-ui-react";
import CityList from "./components/CityList";
import EmployeePositionList from './components/EmployeePositionList';

export default function JobAdvertisementAddForm() {
  return (
    <div>
      <Form>
        <Form.Field>
          <CityList />
        </Form.Field>
        <Form.Field>
          <EmployeePositionList />
        </Form.Field>
      </Form>
    </div>
  );
}
