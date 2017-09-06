import React from 'react';
import { Grid, Nav, NavItem } from 'react-bootstrap';

export default () => {
  return (
    <div className="menu">
      <Grid>
        <Nav bsStyle="pills" justified activeKey={1} onSelect={this.handleSelect}>
          <NavItem eventKey={1} href="/home">Video 1</NavItem>
          <NavItem eventKey={2} title="Item">Video 2</NavItem>
          <NavItem eventKey={3} disabled>Video 3 </NavItem>
        </Nav>
      </Grid>
    </div>
  );
}
