import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, FormControl, ControlLabel, Radio, Button } from 'react-bootstrap';
import Layout from './layout.jsx';
import Banner from './banner.jsx';

class HomePage extends Component {
  render() {
    return (
      <Layout currentUser={this.props.currentUser}>
        <Banner passedProps={this.props}/>
      </Layout>
    );
  }
}

export default HomePage;
