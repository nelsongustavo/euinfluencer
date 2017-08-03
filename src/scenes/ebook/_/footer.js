import React from 'react';
import { Navbar } from 'react-bootstrap';
import FacebookProvider, { Like } from 'react-facebook';
import { YouTubeButton } from 'react-social-sharebuttons';
import { Grid, Row, Col } from 'react-bootstrap';

export default () => {
  return (
    <Navbar inverse className="ebook-footer">
      <Grid>
        <Row className="show-grid">
          <Col md={8} mdOffset={0}>
            <FacebookProvider appId="119817438197601">
              <Like href="https://www.facebook.com/oney.araujo/" colorScheme="dark" showFaces share />
            </FacebookProvider>
          </Col>
          <Col md={4}>
            <div className="yt-button">
              <YouTubeButton channel="niimakeup"/>
            </div>
          </Col>
        </Row>
      </Grid>
    </Navbar>
  );
}
