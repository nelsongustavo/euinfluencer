import React, { Component } from 'react';
import FormContainer from './_/form';
import Learn from './_/learn'
import Layout from '../../shared/layout';
import { Grid, Row } from 'react-bootstrap';
import About from '../../shared/layout';
import './workshop.css';

class WorkShop extends Component {
  render() {
    return (
      <div className="workshop">
        <Layout>
          <Grid fluid={true}>
            <Row className="show-grid">
              <FormContainer />
            </Row>
          </Grid>
          <Grid>
            <Learn />
            <div className="workshop-author-description">
              <h2>UM POUCO MAIS SOBRE O ORGANIZADOR DO EVENTO…</h2>
              <About />
            </div>
          </Grid>
        </Layout>
      </div>
    );
  }
}

export default WorkShop;
