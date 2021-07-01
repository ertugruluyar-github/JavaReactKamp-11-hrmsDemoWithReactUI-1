import React, { useEffect, useState } from "react";
import SystemEmployeeUpdateForm from "../../../pages/systemeEmployeeForms/SystemEmployeeUpdateForm";
import { useParams } from "react-router-dom";
import SystemEmployeeService from './../../../services/systemEmployeeService';

export default function SystemEmployeeUpdateFormDashboard() {
  const { currentSystemEmployeeId } = useParams();
  const [currentSystemEmployee, setCurrentSystemEmployee] = useState({});

  useEffect(() => {
    let systemEmployeeService = new SystemEmployeeService();
    systemEmployeeService
      .get(currentSystemEmployeeId)
      .then((result) => setCurrentSystemEmployee(result.data.data));
      
console.log("AAA: " + currentSystemEmployeeId)
  }, []);
  return (
    <SystemEmployeeUpdateForm currentSystemEmployee={currentSystemEmployee} />
  );
}
