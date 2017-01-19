import React from 'react';
import Header from './header.jsx';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header currentUser={this.props.currentUser} />
        {this.props.children}
      </div>
    );
  }
}
