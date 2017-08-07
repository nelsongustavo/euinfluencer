import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Layout from '../../shared';
import BookDescription from './_/book_description'
import AuthorDescription from './_/author_description'
import './ebook.css';

export default () => {
  return (
    <div>
      <Layout>
        <section>
          <Grid>
            <Row className="show-grid">
              <Col md={4} mdOffset={1}><Image className="center-block" src="https://firebasestorage.googleapis.com/v0/b/***REMOVED***.appspot.com/o/ebook%20(1).png?alt=media&token=25556824-8830-4902-a6bb-506b4e561ed1" rounded /></Col>
              <Col md={7} ><BookDescription /></Col>
            </Row>
          </Grid>
        </section>
        <section className="about">
          <Grid>
            <Row>
              <Col md={3} mdOffset={2}><Image className="center-block" src="https://firebasestorage.googleapis.com/v0/b/***REMOVED***.appspot.com/o/oney_redondo.png?alt=media&token=98e4f209-c3ab-4a7c-96c4-35029a6751ab" rounded /></Col>
              <Col md={7} ><AuthorDescription /></Col>
            </Row>
          </Grid>
        </section>
      </Layout>
    </div>
  );
}
