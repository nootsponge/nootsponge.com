import React, { Component } from 'react';
import { Container } from 'reactstrap';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <Container>
        <div class="text-center pt-5" style={{color: '#daa141'}}>
          <img src="sunny_bp_200.gif" />
          <h1>NootSponge</h1>
          <pre style={{color: '#daa141'}}>
            <a href="mailto:andrew@nootsponge.com" target="_blank">CONTACT</a>&nbsp;|&nbsp;
            <a href="https://twitter.com/nootsponge" target="_blank">TWITTER</a>&nbsp;|&nbsp;
            <a href="https://steamcommunity.com/id/nootspongeborb" target="_blank">STEAM</a>&nbsp;|&nbsp;
            <b>DISCORD: Andrew#2659</b>
          </pre>
        </div>
      </Container>
    );
  }
}
