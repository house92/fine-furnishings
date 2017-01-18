import React, { Component } from 'react';
import { Grid, Row, Col, FormGroup, FormControl, ControlLabel, Radio, Button } from 'react-bootstrap';

export default class QuoteForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPainted: false,
      paint: "Matte",
      colour: "White",
      marginTop: "10rem"
    }
    this.onOptionChange = this.onOptionChange.bind(this)
    this.onPaintChange = this.onPaintChange.bind(this)
    this.onColourChange = this.onColourChange.bind(this)
  }

  onOptionChange(e) {
    var newValue = e.target.value == "true";
    var newMargin = newValue ? "3rem" : "10rem";
    this.setState({ isPainted: newValue, marginTop: newMargin });
  }

  onPaintChange(e) {
    this.setState({ paint: e.target.value });
  }

  onColourChange(e) {
    this.setState({ colour: e.target.value });
  }

  renderIfPainted() {
    if (this.state.isPainted) {
      var paintOptions = ["Matte", "Gloss", "Semi-gloss"];
      var paintOptionsDiv = paintOptions.map(function (option) {
        return  <option key={option.toLowerCase()} value={option.toLowerCase()} aria-label="paint option">{option}</option>;
      });

      var colours = ["White", "Black", "Green", "Blue", "Red"];
      var coloursDiv = colours.map(function (colour) {
        return  <option key={colour.toLowerCase()} value={colour.toLowerCase()} aria-label="paint colour">{colour}</option>;
      });

      return (
        <div className="ifPainted">
          <FormGroup>
            <ControlLabel>Please select the type of paint:</ControlLabel>
            <FormControl componentClass="select" defaultValue={this.state.paint} onChange={this.onPaintChange}>
              {paintOptionsDiv}
            </FormControl>
          </FormGroup>

          <FormGroup>
            <ControlLabel>Please select the colour:</ControlLabel>
            <FormControl componentClass="select" defaultValue={this.state.colour} onChange={this.onColourChange}>
              {coloursDiv}
            </FormControl>
          </FormGroup>
        </div>
      );
    }
  }

  render() {
    var items = ["Chair", "Table", "Bed", "Cupboard", "Coffee table", "Wardrobe", "Bench"];
    var itemsDiv = items.map(function (item) {
      return <option aria-label="item of furniture" key={item.toLowerCase().replace(/ /, "_")} value={item.toLowerCase().replace(/ /, "_")}>{item}</option>;
    });

    var sizes = ["Small", "Medium", "Large"];
    var sizesDiv = sizes.map(function (size) {
      return <Radio key={size.toLowerCase()} type="radio" name="size" value={size.toLowerCase()} aria-label="size" defaultChecked={size == "Medium"} inline>{size}</Radio>
    });

    var woods = ["Pine", "Oak", "Mahogany", "Beech", "Maple"];
    var woodsDiv = woods.map(function (wood) {
      return  <option key={wood.toLowerCase()} value={wood.toLowerCase()} aria-label="wood">{wood}</option>;
    });

    var paintedOptions = [{string: "Yes", value: true}, {string: "No", value: false}];
    var paintedOptionsDiv = paintedOptions.map(function (option) {
      return <option aria-label="painted" key={`painted_${option.value}`} value={option.value}>{option.string}</option>;
    });

    return (
      <form role="form" className="well" style={{marginTop: this.state.marginTop}}>
        <FormGroup>
          <ControlLabel>Select desired item:</ControlLabel>
          <FormControl componentClass="select">
            {itemsDiv}
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Select desired size:</ControlLabel><br />
          {sizesDiv}
        </FormGroup>

        <FormGroup>
          <ControlLabel>Select wood:</ControlLabel>
          <FormControl componentClass="select">
            {woodsDiv}
          </FormControl>
        </FormGroup>

        <FormGroup>
          <ControlLabel>Would you like it to be painted?</ControlLabel>
          <FormControl componentClass="select" defaultValue={this.state.isPainted} onChange={this.onOptionChange}>
            {paintedOptionsDiv}
          </FormControl>
        </FormGroup>

        {this.renderIfPainted()}

        <FormGroup>
          <ControlLabel>Quantity:</ControlLabel>
          <FormControl componentClass="input" type="number" defaultValue={1} min={1} max={20} />
        </FormGroup><br />

        <Button type="submit" className="btn btn-primary order">Order</Button>
      </form>
    );
  }
}
