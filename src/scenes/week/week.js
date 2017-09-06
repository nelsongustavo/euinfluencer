import React, { Component } from 'react';
import Video from './_/video';
import Layout from '../../shared/week_layout';
import { Grid } from 'react-bootstrap';
import FacebookProvider, { Comments } from 'react-facebook';
import './week.css';

class WorkShop extends Component {
  render() {
    return (
      <div className="week">
        <Layout>
          <section>
            <Grid>
              {/* Aqui vai o Id dos videos  */}
              <Video videoId="kr6aQDxj7D8" />
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
