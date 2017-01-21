import React from 'react';
import { Router } from 'react-router';
import Header from './header.jsx';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { signedIn: null };
  }

  componentWillMount() {
    $.ajax({
      method: "GET",
      url: "/auth/is_signed_in.json"
    })
    .done(function(data){
      this.setState({ signedIn: data.signed_in });
    }.bind(this));
  }

  render() {
    return (
      <div>
        <Header currentUser={this.props.currentUser} />
        {this.props.children}
      </div>
    );
  }
}
