import React, { useState, useEffect } from "react";
import WorkingTimeTypeSevice from "../../../services/workingTimeTypeSevice";
import { Form } from 'semantic-ui-react';

export default function WorkingingTimeTypeFilterSelect({ handleFilter, value }) {
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
    value: workingTimeType.type,
  }));

  return (
    <Form.Select
      id="workingTimeTypeId"
      name="workingTimeTypeId"
      placeholder="Yarı Zamanlı"
      width={4}
      selection
      clearable
      options={workingTimeTypeOptions}
      //onChange={(event, data) => handleFilter({workingTimeType: data.value})}
      value={value}
    />
  );
}