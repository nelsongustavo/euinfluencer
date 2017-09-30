import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function Header() {
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
