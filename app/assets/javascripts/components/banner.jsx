import React, { Component } from 'react';
import { Grid, Row, Jumbotron, Col, Carousel } from 'react-bootstrap';
import QuoteForm from './quoteForm.jsx';

var style = {
  landscapeCollapsedMargin: "10rem",
  portraitCollapsedMargin: "14rem",
  landscapeExpandedMargin: "8rem",
  portraitExpandedMargin: "10rem"
}

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultCollapsedMargin: style.landscapeCollapsedMargin,
      defaultExpandedMargin: style.landscapeCollapsedMargin,
      living: "living",
      dining: "dining",
      bedroom: "bedroom"
    };
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    if (window.innerHeight > window.innerWidth) {
      this.setState({
        defaultCollapsedMargin: style.portraitCollapsedMargin,
        defaultExpandedMargin: style.portraitCollapsedMargin,
        living: "living-portrait",
        dining: "dining-portrait",
        bedroom: "bedroom-portrait"
      });
    } else {
      this.setState({
        defaultCollapsedMargin: style.landscapeCollapsedMargin,
        defaultExpandedMargin: style.landscapeExpandedMargin,
        living: "living",
        dining: "dining",
        bedroom: "bedroom"
      });
    }
  }

  componentWillMount() {
    if (window.innerHeight > window.innerWidth) {
      this.setState({
        defaultCollapsedMargin: style.portraitCollapsedMargin,
        defaultExpandedMargin: style.portraitCollapsedMargin,
        living: "living-portrait",
        dining: "dining-portrait",
        bedroom: "bedroom-portrait"
      });
    } else {
      this.setState({
        defaultCollapsedMargin: style.landscapeCollapsedMargin,
        defaultExpandedMargin: style.landscapeExpandedMargin,
        living: "living",
        dining: "dining",
        bedroom: "bedroom"
      });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize, false);
  }

  render() {
    var slides = [{src: `/assets/${this.state.living}.png`, label: `Quality`, p: `All our pieces are hand-crafted by master carpenters`}, {src: `/assets/${this.state.dining}.png`, label: `Style`, p: `We deliver contemporary style with timeless class`}, {src: `/assets/${this.state.bedroom}.png`, label: `Personality`, p: `Made just for you`}];
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
                <Col xs={10} xsOffset={1} sm={8} smOffset={2} md={3} mdOffset={2} lg={3} lgOffset={1}>
                  <QuoteForm passedProps={this.props.passedProps} defaultCollapsedMargin={this.state.defaultCollapsedMargin} defaultExpandedMargin={this.state.defaultExpandedMargin} />
                </Col>
              </Row>
          </Jumbotron>
        </Col>
    );
  }
}
