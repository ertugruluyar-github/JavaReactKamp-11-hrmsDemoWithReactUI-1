import "./App.css";
import "semantic-ui-css/semantic.min.css";
import HomeDashboard from "./layouts/dashboards/home/HomeDashboard";
import NavBar from "./layouts/navbar/NavBar";
import { Container, Grid } from "semantic-ui-react";
import { Route } from "react-router-dom";
import EmployerListDashboard from "./layouts/dashboards/employerList/EmployerListDashboard";
import JobSeekerListDashboard from "./layouts/dashboards/jobSeekerList/JobSeekerListDashboard";
import ActiveJobAdvertisementListDashboard from "./layouts/dashboards/activeJobAdvertisementList/ActiveJobAdvertisementListDashboard";
import JobAdvertisementAddFormDashboard from "./layouts/dashboards/jobAdvertisementAddForm/JobAdvertisementAddFormDashboard";
import CurriculumVitaeListDashboard from "./layouts/dashboards/curriculumVitaeList/CurriculumVitaeListDashboard";
import LeftSideBar from "./layouts/sidebars/LeftSideBar";
import { ToastContainer } from "react-toastify";
import SystemEmployeeUpdateFormDashboard from "./layouts/dashboards/systemEmployeeForms/SystemEmployeeUpdateFormDashboard";
import EmployerUpdateFormDashboard from "./layouts/dashboards/employerForms/EmployerUpdateFormDashboard";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container className="main">
        <ToastContainer position="bottom-right" />
        <Grid>
          <Grid.Row>
            <Grid.Column width={2}>
              <LeftSideBar />
            </Grid.Column>
            <Grid.Column width={14}>
              <Route exact path="/" component={HomeDashboard} />
              <Route exact path="/home" component={HomeDashboard} />

              <Route
                exact
                path="/employers"
                component={EmployerListDashboard}
              />

              <Route
                exact
                path="/employers/:currentEmployerId/update"
                component={EmployerUpdateFormDashboard}
              />

              <Route
                exact
                path="/jobseekers"
                component={JobSeekerListDashboard}
              />

              <Route
                exact
                path="/curriculumvitaes"
                component={CurriculumVitaeListDashboard}
              />

              <Route
                exact
                path="/systememployees/:currentSystemEmployeeId/update"
                component={SystemEmployeeUpdateFormDashboard}
              />

              <Route
                exact
                path="/activejobadvertisements"
                component={ActiveJobAdvertisementListDashboard}
              />

              <Route
                exact
                path="/:currentEmployerId/jobadvertisementaddform"
                component={JobAdvertisementAddFormDashboard}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
