import React, { Component } from 'react';
import { Row, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import _ from 'lodash';
import Layout from './layout.jsx';
import Functions from '../../../lib/functions.js';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      name: ''
    };
    this.passwordLengthCheck = this.passwordLengthCheck.bind(this);
    this._handleInputChange = this._handleInputChange.bind(this);
    this._handleRegistrationClick = this._handleRegistrationClick.bind(this);
  }

  _handleInputChange(ev) {
    // Get a deep clone of the component's state before the input change.
    var nextState = _.cloneDeep(this.state);

    //Update the state of the component
    nextState[ev.target.name] = ev.target.value;

    // Update the component's state with the new state
    this.setState(nextState);
  }

  _handleRegistrationClick(e) {
    $.ajax({
      method: "POST",
      url: "/users.json",
      data: {
        user: {
          email: this.state.email,
          uid: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation,
          name: this.state.name,
          provider: "email"
        },
        authenticity_token: Functions.getMetaContent("csrf-token")
      }
    })
    .done(function(data){
      location.reload();
    }.bind(this));
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
          <FormControl type="hidden" name="authenticity_token" />
          <div class="field">
            <ControlLabel htmlFor="user_email">E-mail:</ControlLabel>
            <FormControl type="email" name="user_email" autoFocus={true} />
          </div>
          
          <div class="field">
            <ControlLabel htmlFor="user_password" name="user[password]">Password:</ControlLabel>
            <FormControl type="password" onChange={this.passwordLengthCheck} autoComplete="off" />
          </div>

          <div class="field">
            <ControlLabel htmlFor="user_password_confirmation" name="user[password_confirmation]">Confirm password:</ControlLabel>
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
