import React, { Component } from 'react';
import { Row, Col, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import _ from 'lodash';
import Layout from './layout.jsx';
import Functions from '../../../../lib/functions.js';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_confirmation: ''
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
    e.preventDefault();
    $.ajax({
      method: "POST",
      url: "/users.json",
      data: {
        user: {
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation
        },
        authenticity_token: Functions.getMetaContent("csrf-token")
      }
    })
    .done(function(data){
      console.log(data);
      // location.reload();
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
      <Layout currentUser={this.props.currentUser}>
        <span dangerouslySetInnerHTML={{__html: deviseErrorMessages}}></span>
        <form>
          <div class="field">
            <ControlLabel htmlFor="user_email">E-mail:</ControlLabel>
            <FormControl type="email" name='email'
            placeholder='E-mail'
            value={this.state.email}
            onChange={this._handleInputChange} autoFocus={true} />
          </div>

          <div class="field">
            <ControlLabel htmlFor="user_password" name="user[password]">Password:</ControlLabel>
            <FormControl type="password" name='password'
            placeholder='Password'
            value={this.state.password}
            onChange={this._handleInputChange} autoComplete="off" />
          </div>

          <div class="field">
            <ControlLabel htmlFor="user_password_confirmation" name="user[password_confirmation]">Confirm password:</ControlLabel>
            <FormControl type="password" name='password_confirmation'
            placeholder='Re-type password'
            value={this.state.password_confirmation}
            onChange={this._handleInputChange} autoComplete="off" />
          </div>

          <div class="actions">
            <Button type="submit" className="btn btn-primary" onClick={this._handleRegistrationClick}>Sign Up</Button>
          </div>
          <span>{this.props.deviseLinks}</span>
        </form>
      </Layout>
    );
  }
}
