import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import FormContainer from './_/Form';
import Learn from './_/Learn'
import Layout from '../../Shared/Layout';
import About from '../../Shared/About';
import './WorkShop.css';

export default function WorkShop() {
  return (
    <div className="workshop">
      <Layout>
        <Grid fluid>
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
