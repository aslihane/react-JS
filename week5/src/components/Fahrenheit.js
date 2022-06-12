import React, { Component } from "react";

export default class Fahrenheit extends Component {
  render() {
    return (
      <div>
        <h3>Fahrenheit: {this.props.temp* 1.8 + 32} °F</h3>
      </div>
    );
  }
}