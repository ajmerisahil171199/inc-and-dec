import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";

function App() {
  let [num1, setNum1] = useState(50);
  let [num2, setNum2] = useState(40);
  let [num3, setNum3] = useState(30);
  let [num4, setNum4] = useState(20);

  console.log(num1, num2, num3, num4);

  let myName = document.getElementsByClassName("h11");
  let myyName = document.getElementsByClassName("h12");
  let myyyName = document.getElementsByClassName("h13");
  let myyyyName = document.getElementsByClassName("h14");
  for (var i = 0; i < myName.length; i++) {
    myName[i].style.fontSize = `${num1}px`;
    myyName[i].style.fontSize = `${num2}px`;
    myyyName[i].style.fontSize = `${num3}px`;
    myyyyName[i].style.fontSize = `${num4}px`;
  }

  console.log(myName, myyName, myyyName, myyyyName);

  let increase = () => {
    if (num1 < 100) {
      setNum1(num1 + 2);
      setNum2(num2 + 2);
      setNum3(num3 + 2);
      setNum4(num4 + 2);
    }
  };

  let decrease = () => {
    if (num1 > 25) {
      setNum1(num1 - 2);
      setNum2(num2 - 2);
      setNum3(num3 - 2);
      setNum4(num4 - 2);
    }
  };

  return (
    <div>
      <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="butclass">
        <Button id="primary" onClick={increase} variant="primary">
          +
        </Button>
        <Button
          onClick={() => {
            setNum1(50);
            setNum2(40);
            setNum3(30);
            setNum4(20);
          }}
          variant="success"
        >
          medium
        </Button>
        <Button id="danger" onClick={decrease} variant="danger">
          -
        </Button>
      </div>
      <div>
        <h1 className="h11 text-center">sahil ajmeri 1</h1>
        <h2 className="h12 text-center">sahil ajmeri 2</h2>
        <h3 className="h13 text-center">sahil ajmeri 3</h3>
        <h4 className="h14 text-center">sahil ajmeri 4</h4>
      </div>
    </div>
  );
}

export default App;
