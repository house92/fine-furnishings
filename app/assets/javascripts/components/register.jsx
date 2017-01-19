import React, { Component } from 'react';
import { Row, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import Layout from './layout.jsx';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.passwordLengthCheck = this.passwordLengthCheck.bind(this);
  }

  passwordLengthCheck(e) {
    if (e.target.value.length < this.props.minimalPasswordLength) {
      return <em>(this.props.minimalPasswordLength characters minimum)</em>;
    }
  }

  render() {
    var deviseErrorMessages = this.props.deviseErrorMessages;
    var authenticityToken = this.props.authenticityToken;
    return (
      <Layout currentUser={null}>
        <span>{deviseErrorMessages}</span>
        <form action="/users" method="POST">
          <FormControl type="hidden" name="authenticity_token" value={authenticityToken} />
          <div class="field">
            <ControlLabel htmlFor="user_email">E-mail:</ControlLabel>
            <FormControl type="email" name="user_email" autoFocus={true} />
          </div>

          <div class="field">
            <ControlLabel htmlFor="user_password" name="user[password]">Password:</ControlLabel>
            <FormControl type="password" onChange={this.passwordLengthCheck} autoComplete="off" />
          </div>

          <div class="field">
            <ControlLabel htmlFor="user_password_confirmation" name="user[password_confirmation]">Password:</ControlLabel>
            <FormControl type="password" onChange={this.passwordLengthCheck} autoComplete="off" />
          </div>

          <div class="actions">
            <Button type="submit" className="btn btn-primary">Sign Up</Button>
          </div>
          <span>{this.props.deviseLinks}</span>
        </form>
      </Layout>
    );
  }
}
