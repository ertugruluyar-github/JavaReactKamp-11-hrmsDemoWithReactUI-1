import React, {useState, useEffect} from "react";
import { Dropdown } from 'semantic-ui-react';
import EmployeePositionService from './../../../services/employeePositionService';

export default function EmployeePositionList() {

  const [employeePoisitions, setEmployeePoisitions] = useState([])

  useEffect(() => {
    let employeePositionService = new EmployeePositionService()
    employeePositionService.getEmployeePositions().then(result => setEmployeePoisitions(result.data.data))
  }, [])

  let employeePositionOptions = employeePoisitions.map(employeePoisition => (
    {
      key: employeePoisition.id,
      text: employeePoisition.positionName,
      value: employeePoisition.positionName,
    }
  ))

  return (
    <div>
      <Dropdown
        placeholder="Select Employee Position"
        search
        selection
        options={employeePositionOptions}
      />
    </div>
  );
}
