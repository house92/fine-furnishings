import React, { Component } from 'react';
import { Grid, Row, Jumbotron, Col, Carousel } from 'react-bootstrap';
import QuoteForm from './quoteForm.jsx';

export default class Banner extends Component {
  render() {
    var slides = [{src: "/assets/furniture.png", label: "Quality", p: "All our pieces are hand-crafted by master carpenters"}, {src: "/assets/dining.png", label: "Style", p: "We deliver contemporary style with timeless class"}, {src: "/assets/bedroom.png", label: "Personality", p: "Made just for you"}];
    var slidesDiv = slides.map(function (slide) {
      return (
        <Carousel.Item key={`carousel${slides.indexOf(slide)}`}>
          <img alt="furniture" src={slide.src}/>
          <Carousel.Caption>
            <h3>{slide.label}</h3>
            <p>{slide.p}</p>
          </Carousel.Caption>
        </Carousel.Item>
      );
    });
    return (
        <Col md={12} className="no-margin">
          <Jumbotron style={{height: window.innerHeight}}>
            <Carousel pauseOnHover={false}>
              {slidesDiv}
            </Carousel>
              <Row className="show-grid">
                <Col  xs={12} sm={12} md={4} mdOffset={1} lg={5} lgOffset={1}>
                  <img className="logo" src="/assets/fine_furnishings.png" />
                </Col>
                <Col xs={12} sm={8} smOffset={2} md={4} mdOffset={3} lg={3} lgOffset={1}>
                  <QuoteForm passedProps={this.props.passedProps} />
                </Col>
              </Row>
          </Jumbotron>
        </Col>
    );
  }
}
