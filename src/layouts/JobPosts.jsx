import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default function JobPosts() {
  return (
    <div>
      <div>
        <Button as={NavLink} to="/JobPostings">
          İş İlanları
        </Button>
      </div>
    </div>
  );
}
