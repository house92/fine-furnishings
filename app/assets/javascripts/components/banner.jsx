import React, { Component } from 'react';
import { Grid, Row, Jumbotron, Col, Carousel } from 'react-bootstrap';
import QuoteForm from './quoteForm.jsx';

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = { defaultMargin: "10rem" };
    this.isPortrait = this.isPortrait.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  isPortrait() {
    if (window.innerHeight > window.innerWidth) {
      // setState({ defaultMargin: "14rem" });
      return `-portrait`;
    } else {
      // setState({ defaultMargin: "10rem" });
      return "";
    }
  }

  onResize() {
    this.forceUpdate();
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize, false);
  }

  render() {
    var slides = [{src: `/assets/living${this.isPortrait()}.png`, label: `Quality`, p: `All our pieces are hand-crafted by master carpenters`}, {src: `/assets/dining${this.isPortrait()}.png`, label: `Style`, p: `We deliver contemporary style with timeless class`}, {src: `/assets/bedroom${this.isPortrait()}.png`, label: `Personality`, p: `Made just for you`}];
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
        <Col md={12} className="no-padding">
          <Jumbotron style={{height: window.innerHeight}}>
            <Carousel pauseOnHover={false}>
              {slidesDiv}
            </Carousel>
              <Row className="show-grid">
                <Col  xs={12} sm={12} md={4} mdOffset={1} lg={5} lgOffset={1}>
                  <img className="logo" src="/assets/fine_furnishings.png" />
                </Col>
                <Col xs={12} sm={8} smOffset={2} md={3} mdOffset={2} lg={3} lgOffset={1}>
                  <QuoteForm passedProps={this.props.passedProps} defaultMargin={this.state.defaultMargin} />
                </Col>
              </Row>
          </Jumbotron>
        </Col>
    );
  }
}
