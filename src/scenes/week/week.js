import React, { Component } from 'react';
import Video from './_/video';
import Layout from '../../shared/week_layout';
import { Grid, Nav, NavItem } from 'react-bootstrap';
import FacebookProvider, { Comments } from 'react-facebook';
import './week.css';

class WorkShop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videoId: "kr6aQDxj7D8"
    };
    // This binding is necessary to make `this` work in the callback
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedKey) {
    this.setState({videoId: selectedKey})
  }

  render() {
    return (
      <div className="week">
        <Layout>
          <Grid>
            <Nav bsStyle="pills" justified activeKey={this.state.videoId} onSelect={this.handleSelect}>
              <NavItem eventKey={"kr6aQDxj7D8"} title="video 1">Video 1</NavItem>
              <NavItem eventKey={"aTOGEZJj-vg"} title="video 2">Video 2</NavItem>
              <NavItem eventKey={3} title="video 3" disabled>Video 3 </NavItem>
              <NavItem eventKey={4} title="video 4" disabled>Video 4 </NavItem>
            </Nav>
          </Grid>
          <section>
            <Grid>
              {/* Aqui vai o Id dos videos  */}
              <Video videoId={this.state.videoId} />
            </Grid>
          </section>
          <section>
            <Grid>
              <FacebookProvider appId="119817438197601">
                <Comments href="http://***REMOVED***.com" width="100%"/>
              </FacebookProvider>
            </Grid>
          </section>
        </Layout>
      </div>
    );
  }
}

export default WorkShop;
