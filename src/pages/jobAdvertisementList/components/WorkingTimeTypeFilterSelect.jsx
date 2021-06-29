import React, { useState, useEffect } from "react";
import WorkingTimeTypeSevice from "../../../services/workingTimeTypeSevice";
import { Form } from "semantic-ui-react";

export default function WorkingingTimeTypeFilterSelect({ handleFilter }) {
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
      placeholder="Yarı Zamanlı"
      width={4}
      selection
      clearable
      options={workingTimeTypeOptions}
      onChange={(event, data) =>
        handleFilter(
          data.value !== ""
            ? { workingTimeTypeId: data.value }
            : { workingTimeTypeId: -1 }
        )
      }
    />
  );
}
