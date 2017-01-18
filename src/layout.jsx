import React from 'react';
import Header from './header';

export default class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css" />
        </head>
        <body>
          <Header currentUser={this.props.currentUser} />
          {this.props.children}
        </body>
      </html>
    );
  }
}
