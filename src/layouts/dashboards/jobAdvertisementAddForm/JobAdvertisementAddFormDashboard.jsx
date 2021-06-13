import React from "react";
import { Grid } from "semantic-ui-react";

export default function JobAdvertisementAddFormDashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <LeftSideBar />
          </Grid.Column>
          <Grid.Column width={12}></Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
