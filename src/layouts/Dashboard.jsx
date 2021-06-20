import React from "react";
import JobPosts from "./JobPosts";
import JobPostings from "../pages/JobPostings";
import { Grid } from "semantic-ui-react";
export default function DashBoard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width="4">
            <JobPosts />
          </Grid.Column>
          <Grid.Column width="12">
            <JobPostings />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
