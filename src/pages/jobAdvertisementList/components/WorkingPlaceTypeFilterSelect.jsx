import React, { useState, useEffect } from "react";
import WorkingPlaceTypeSevice from "./../../../services/workingPlaceTypeService";
import { Form } from "semantic-ui-react";

export default function WorkingPlaceTypeFilterSelect({ handleFilter }) {
  const [workingPlaceTypes, setWorkingPlaceTypes] = useState([]);

  useEffect(() => {
    let workingPlaceTypeService = new WorkingPlaceTypeSevice();
    workingPlaceTypeService
      .getAll()
      .then((result) => setWorkingPlaceTypes(result.data.data));
  }, []);

  let workingingPlaceTypeOptions = workingPlaceTypes.map(
    (workingPlaceType) => ({
      key: workingPlaceType.id,
      text: workingPlaceType.type,
      value: workingPlaceType.id,
    })
  );

  return (
    <Form.Select
      id="workingPlaceTypeId"
      name="workingPlaceTypeId"
      placeholder="İş Yerinde"
      width={4}
      selection
      clearable
      options={workingingPlaceTypeOptions}
      onChange={(event, data) =>
        handleFilter(
          data.value !== ""
            ? { workingPlaceTypeId: data.value }
            : { workingPlaceTypeId: -1 }
        )
      }
    />
  );
}
