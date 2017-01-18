import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, FormControl, ControlLabel, Radio, Button } from 'react-bootstrap';
import Layout from './layout';
import Banner from './jumbotron';
import './css/App.css';

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
