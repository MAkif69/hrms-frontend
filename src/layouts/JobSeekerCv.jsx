import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default function JobSeekerCv() {
  return (
    <div>
      <Button as={NavLink} to="/JobSeekerCvs">
        CV
      </Button>
    </div>
  );
}
