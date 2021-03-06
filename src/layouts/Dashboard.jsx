import React from "react";

import JobPostings from "../pages/JobPostings";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router-dom";
import Menu from "../layouts/Menu";
import JobSeekerCVs from "../pages/JobSeekerCVs";
import JobPostingAdd from "../pages/JobPostingAdd";


export default function DashBoard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="4">
            <Menu />
          </Grid.Column>
          <Grid.Column width="12">
            <Route path="/JobPostings" component={JobPostings} />
            <Route path="/JobSeekerCvs" component={JobSeekerCVs} />
            <Route path="/JobPosting/Add" component={JobPostingAdd} />
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </div>
  );
}
