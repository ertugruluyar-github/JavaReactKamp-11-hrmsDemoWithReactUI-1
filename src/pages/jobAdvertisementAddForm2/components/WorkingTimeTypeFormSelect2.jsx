import React, { useState, useEffect } from "react";
import WorkingTimeTypeSevice from "../../../services/workingTimeTypeSevice";
import { Form } from 'semantic-ui-react';

export default function WorkingingTimeTypeFormSelect2({ handleChange, onBlur, value, error }) {
  const [workingTimeTypes, setWorkingTimeTypes] = useState([]);

  useEffect(() => {
    let workingTimeTypeService = new WorkingTimeTypeSevice();
    workingTimeTypeService
      .getWorkingTimeTypes()
      .then((result) => setWorkingTimeTypes(result.data.data));
  }, []);

  let workingTimeTypeOptions = workingTimeTypes.map((workingTimeType) => ({
    key: workingTimeType.id,
    text: workingTimeType.type,
    value: workingTimeType.id,
  }));

  return (
    <Form.Select
      id="workingTimeTypeId"
      name="workingTimeTypeId"
      label="Working Time Type"
      placeholder="Yarı Zamanlı"
      width={4}
      search
      selection
      options={workingTimeTypeOptions}
      onChange={(event, data) => handleChange(data.value, "workingTimeTypeId")}
      onBlur={onBlur}
      value={value}
      error={error}
    />
  );
}
