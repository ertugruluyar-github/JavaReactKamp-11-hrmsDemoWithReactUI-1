import React from "react";
import LeftSideBar from "./sidebars/LeftSideBar";
import { Divider, Grid } from "semantic-ui-react";
import ActiveJobAdvertisementList from "../../../pages/jobAdvertisementList/ActiveJobAdvertisementList";
import EmployeePositionList from "../../../pages/jobAdvertisementAddForm/components/EmployeePositionList";
import EmployerList from "../../../pages/employerList/EmployerList";
import JobSeekerList from "../../../pages/jobSeekerList/JobSeekerList";
import CityList from "../../../pages/jobAdvertisementAddForm/components/CityList";
import CurriculumVitaeDetailView from "../../../pages/curriculumVitaeDetailView/CurriculumVitaeDetailView";
import CurriculumVitaeList from "../../../pages/curriculumVitaeList/CurriculumVitaeList";

export default function HomeDashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2}>
            <LeftSideBar />
          </Grid.Column>
          <Grid.Column width={14}>
            <Divider horizontal>Employer List</Divider>
            <EmployerList />

            <Divider horizontal>Job Seeker List</Divider>
            <JobSeekerList />

            <Divider horizontal>Active Job Advertisement List</Divider>
            <ActiveJobAdvertisementList />

            <Divider horizontal>
              Employee Position List in Job Advertisement Add Form
            </Divider>
            <EmployeePositionList />

            <Divider horizontal>
              City List in Job Advertisement Add Form
            </Divider>
            <CityList />

            <Divider horizontal>
              Curriculum Vitae List
            </Divider>
            <CurriculumVitaeList />

            <Divider horizontal>
              Curriculum Vitae Detail View
            </Divider>
            <CurriculumVitaeDetailView />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
