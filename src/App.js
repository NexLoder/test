import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Button';
import Row from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Button';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
      <SayFullName name="Nikita" surname="Balomozhnov" link="vk.com" />
      <SayFullName name="Daria" surname="Medinskaya" link="facebook.com" />
      <SayFullName name="Mikhail" surname="Balomozhnov" link="#" />
  </div>
    );
  }
}

function SayFullName(props) {
  return (
          <div>
          <h1>My name {props.name}, surname - {props.surname} </h1>
          <a href={props.link}>Link on my profile</a>
          </div>
  )
}

export default App;
