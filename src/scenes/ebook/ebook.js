import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Layout from '../../shared/layout';
import About from '../../shared/about';
import BookDescription from './_/book_description'
import './ebook.css';

export default () => {
  return (
    <div>
      <Layout>
        <section>
          <Grid>
            <Row className="show-grid">
              <Col md={4} mdOffset={1}><Image className="center-block" src="https://firebasestorage.googleapis.com/v0/b/euinfluencer.appspot.com/o/ebook%20(1).png?alt=media&token=25556824-8830-4902-a6bb-506b4e561ed1" rounded /></Col>
              <Col md={7} ><BookDescription /></Col>
            </Row>
          </Grid>
        </section>
        <About />
      </Layout>
    </div>
  );
}
