import "./App.css";
import "semantic-ui-css/semantic.min.css";
import HomeDashboard from "./layouts/dashboards/home/HomeDashboard";
import NavBar from "./layouts/navbar/NavBar";
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container className="main">
        <HomeDashboard />
      </Container>
    </div>
  );
}

export default App;
