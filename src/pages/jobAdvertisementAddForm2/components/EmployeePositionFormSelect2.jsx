import React, { useState, useEffect } from "react";
import { Form } from "semantic-ui-react";
import EmployeePositionService from "../../../services/employeePositionService";

export default function EmployeePositionFormSelect2({
  handleChange,
  onBlur,
  value,
  error,
}) {
  const [employeePoisitions, setEmployeePoisitions] = useState([]);

  useEffect(() => {
    let employeePositionService = new EmployeePositionService();
    employeePositionService
      .getEmployeePositions()
      .then((result) => setEmployeePoisitions(result.data.data));
  }, []);

  let employeePositionOptions = employeePoisitions.map((employeePoisition) => ({
    key: employeePoisition.id,
    text: employeePoisition.positionName,
    value: employeePoisition.id,
  }));

  return (
    <Form.Select
      id="employeePositionId"
      name="employeePositionId"
      label="Employee Position"
      placeholder="Software Developer"
      width={4}
      search
      selection
      options={employeePositionOptions}
      onChange={(event, data) => handleChange(data.value, "employeePositionId")}
      onBlur={onBlur}
      value={value}
      error={error}
    />
  );
}
