import React, { useState, useEffect } from "react";
import WorkingPlaceTypeSevice from "../../../services/workingPlaceTypeService";
import { Form } from 'semantic-ui-react';

export default function WorkingPlaceTypeFormSelect({ handleChange, onBlur, value, error }) {
  const [workingPlaceTypes, setWorkingPlaceTypes] = useState([]);

  useEffect(() => {
    let workingPlaceTypeService = new WorkingPlaceTypeSevice();
    workingPlaceTypeService
      .getWorkingPlaceTypes()
      .then((result) => setWorkingPlaceTypes(result.data.data));
  }, []);

  let workingingPlaceTypeOptions = workingPlaceTypes.map((workingPlaceType) => ({
    key: workingPlaceType.id,
    text: workingPlaceType.type,
    value: workingPlaceType.id,
  }));

  return (
    <Form.Select
      id="workingPlaceTypeId"
      name="workingPlaceTypeId"
      label="Working Place Type"
      placeholder="İş Yerinde"
      width={4}
      search
      selection
      options={workingingPlaceTypeOptions}
      onChange={(event, data) => handleChange(data.value, "workingPlaceTypeId")}
      onBlur={onBlur}
      value={value}
      error={error}
    />
  );
}
