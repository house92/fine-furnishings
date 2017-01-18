import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class navbarInstance extends React.Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">FineFurnishings</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/user">Products</NavItem>
            <NavItem eventKey={2} href="/messages">Messages</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href={this.props.currentUser ? "/user/" + this.props.currentUser.id : "/login"}>{this.props.currentUser ? "Profile" : "Log In"}</NavItem>
            <NavItem eventKey={2} href={this.props.currentUser ? "/logout" : "/register"}>{this.props.currentUser ? "Log Out" : "Sign Up"}</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}