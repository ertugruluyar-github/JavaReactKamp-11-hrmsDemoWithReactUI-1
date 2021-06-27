import React, { useState, useEffect } from "react";
import WorkingPlaceTypeSevice from './../../../services/workingPlaceTypeService';
import { Form } from 'semantic-ui-react';

export default function WorkingPlaceTypeFilterSelect({ handleFilter, value }) {
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
    value: workingPlaceType.type,
  }));

  return (
    <Form.Select
      id="workingPlaceTypeId"
      name="workingPlaceTypeId"
      placeholder="İş Yerinde"
      width={4}
      selection
      clearable
      options={workingingPlaceTypeOptions}
      //onChange={(event, data) => handleFilter({workingPlaceType: data.value})}
      value={value}
    />
  );
}
