import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import {
  Navbar,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class TopPanel extends Component {
  state = {};

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Nav className="ml-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav className="navbar-toggler-icon" />
              <DropdownMenu>
                <LinkContainer to="/list">
                  <DropdownItem>Layout List</DropdownItem>
                </LinkContainer>
                <LinkContainer to="/configure">
                  <DropdownItem>Layout Configuration</DropdownItem>
                </LinkContainer>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default TopPanel;
