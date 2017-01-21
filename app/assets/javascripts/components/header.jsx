import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { IndexLink } from 'react-router';
import Functions from '../../../../lib/functions.js';

export default class navbarInstance extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
  }

  handleClick(e) {
    window.location = e.target.href;
  }

  handleSignOut(e) {
    $.ajax({
      url: e.target.href,
      type: 'delete',
      data: {
        authenticity_token: Functions.getMetaContent("csrf-token")
      }
    }).done(function (data) {
      window.location = "/";
    });
  }

  isLoggedIn() {
    if (this.props.currentUser) {
      return (
        <Nav pullRight>
          <NavItem eventKey={1} href={`/user/${this.props.currentUser.id}`} onClick={this.handleClick}>Profile</NavItem>
          <NavItem eventKey={2} href="/users/sign_out" onClick={this.handleSignOut}>Log Out</NavItem>
        </Nav>
      );
    } else {
      return (
        <Nav pullRight>
          <NavItem eventKey={1} href="/users/sign_in" onClick={this.handleClick}>Log In</NavItem>
          <NavItem eventKey={2} href="/users/sign_up" onClick={this.handleClick}>Sign Up</NavItem>
        </Nav>
      );
    }
  }

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
            <NavItem eventKey={1} href="/" onClick={this.handleClick}>About Us</NavItem>
            <NavItem eventKey={2} href="/messages" onClick={this.handleClick}>Guide</NavItem>
            <NavDropdown eventKey={3} title="Products" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} onClick={this.handleClick}>Living Room</MenuItem>
              <MenuItem eventKey={3.2} onClick={this.handleClick}>Dining Room</MenuItem>
              <MenuItem eventKey={3.3} onClick={this.handleClick}>Bedroom</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3} onClick={this.handleClick}>Finishing touches</MenuItem>
            </NavDropdown>
          </Nav>
          {this.isLoggedIn()}
        </Navbar.Collapse>
      </Navbar>
    );
  }

}
