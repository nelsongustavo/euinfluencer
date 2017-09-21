import React from 'react';
import { Navbar } from 'react-bootstrap';

export default () => {
  return (
    <div className="header">
      <header>
        <Navbar inverse className="header">
          <a href="/">Euinfluencer<span>.com</span></a>
        </Navbar>
      </header>
    </div>
  );
}
