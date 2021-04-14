import React, { Component } from 'react';
import Container from 'reactstrap/lib/Container';

export class NotFound extends Component {
  static displayName = NotFound.name;

  render () {
    return (
      <Container>
        <div class="text-center pt-5" style={{color: '#e8a329'}}>
          <h1><b>404</b> PAGE<b>NOT</b>FOUND</h1>
          <p>Try again?</p>
        </div>
      </Container>
    );
  }
}
