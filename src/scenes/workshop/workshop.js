import React, { Component } from 'react';
import FormContainer from './_/Form';
import Learn from './_/Learn'
import Layout from '../../shared/layout';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import AuthorDescription from '../ebook/_/author_description'
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
              <section>
                <Row>
                  <Col md={3} mdOffset={2}><Image className="center-block" src="https://firebasestorage.googleapis.com/v0/b/***REMOVED***.appspot.com/o/oney_redondo_vermelho.png?alt=media&token=b9eebb97-2916-498b-a896-04f5b16659af" rounded /></Col>
                  <Col md={7} ><AuthorDescription /></Col>
                </Row>
              </section>
            </div>
          </Grid>
        </Layout>
      </div>
    );
  }
}

export default WorkShop;
