import React from "react";
import { Menu } from 'semantic-ui-react';
import JobPosts from "./JobPosts";
import JobSeekerCv from "./JobSeekerCv";

export default function menu() {
  return (
    <div>
      <Menu inverted vertical>
         <Menu.Item>
             <JobPosts/>
         </Menu.Item>
         <Menu.Item>
             <JobSeekerCv/>
         </Menu.Item>
      </Menu>
    </div>
  );
}
