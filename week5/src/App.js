import React, { Component } from "react";
import {Button, Col, Container, Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Celcius from "./components/Celcius";
import Fahrenheit from "./components/Fahrenheit";
import Kelvin from "./components/Kelvin";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0,
    };
  }

  increase_temp = () => {
    this.setState({ temperature: this.state.temperature + 1 }); 
  };

  render() {
    return (
      <div>
        <Container>
          <Row>
            <h1>Hava nasıl?</h1>
            <h6>Şu an sıcaklık: {this.state.temperature} derece.</h6>
            <Col>
              <Button color="success" onClick={() => this.increase_temp()}>Sıcaklık Artır</Button>
            </Col>
          </Row>
          <Row>
            <h4>3 Birimde Sıcaklık Ölçümü</h4> 
          </Row>
          <Row>
            <Col>
            <Celcius temp={this.state.temperature}/>
            </Col>
            <Col>
            <Fahrenheit temp={this.state.temperature}/>
            </Col>
            <Col>
            <Kelvin temp={this.state.temperature}/>
            </Col>
          </Row>

        </Container>
      </div>
    );
  }
}