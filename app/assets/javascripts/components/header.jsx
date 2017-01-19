import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class navbarInstance extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">FineFurnishings</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/user">About Us</NavItem>
            <NavItem eventKey={2} href="/messages">Guide</NavItem>
            <NavDropdown eventKey={3} title="Products" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Living Room</MenuItem>
              <MenuItem eventKey={3.2}>Dining Room</MenuItem>
              <MenuItem eventKey={3.3}>Bedroom</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Finishing touches</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href={this.props.currentUser ? "/user/" + this.props.currentUser.id : "/users/sign_in"}>{this.props.currentUser ? "Profile" : "Log In"}</NavItem>
            <NavItem eventKey={2} href={this.props.currentUser ? "/users/sign_out" : "/users/sign_up"}>{this.props.currentUser ? "Log Out" : "Sign Up"}</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}
