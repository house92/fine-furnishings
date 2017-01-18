import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, FormControl, ControlLabel, Radio, Button } from 'react-bootstrap';
import Layout from './layout.jsx';
import Banner from './jumbotron.jsx';

class HomePage extends Component {
  render() {
    return (
      <Layout currentUser={null}>
        <Banner />
      </Layout>
    );
  }
}

export default HomePage;
