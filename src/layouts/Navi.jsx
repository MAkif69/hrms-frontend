import React from "react";
import LogIn from "./LogIn";
import Register from "./Register";
import { Button, Menu, Container } from "semantic-ui-react";
export default function Navi() {
  return (
    <div>
      <Menu>
        <Container>
          <Menu.Item>
            <Button primary>
              <Register />
            </Button>
          </Menu.Item>

          <Menu.Item>
            <Button>
              <LogIn />
            </Button>
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
}
