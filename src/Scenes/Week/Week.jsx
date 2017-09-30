import React, { Component } from 'react';
import _ from "lodash";
import { connect } from "react-redux";
import { Grid, Nav, NavItem, Glyphicon, Button } from 'react-bootstrap';
import FacebookProvider, { Comments } from 'react-facebook';

import { fetchVideos } from "../../flux/actions";
import Video from './_/Video';
import Layout from '../../Shared/Layout';
import Form from '../../Shared/Form';
import './Week.css';

class Week extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videoId: "",
      showForm: false
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleFormButton = this.handleFormButton.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  handleFormButton() {
    this.setState({
     showForm: true
   });
  }

  closeForm(){
    this.setState({
      showForm: false
    })
  }

  handleSelect(selectedKey) {
    this.setState({videoId: selectedKey})
  }

  componentDidMount() {
     this.props.fetchVideos()
  }

  renderVideos() {
    const { data } = this.props.videos;

    return _.map(data, video => {
      return (
        <NavItem
          key={video.id}
          className={video.id == 1 ? "first" : ""}
          eventKey={video.yt_id}
          title={video.title}
          disabled={!video.is_active}>
          {video.is_active ? "" : <Glyphicon glyph="lock" />}
          {" "}
          {video.title + " " + video.data}
        </NavItem>
      );
    });
  }

  render() {
    let yt_id = "";
    const { current } = this.props.videos;

    if (current) {
        yt_id = current.yt_id;
    }

    const videoId = this.state.videoId ? this.state.videoId :  yt_id;
    return (
      <div className="week">
        <Layout>
          <Grid>
            <div className="navbar-header">
              <button data-toggle="collapse-side" data-target=".side-collapse" data-target-2=".side-collapse-container" type="button" className="navbar-toggle pull-left"><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
            </div>
            <div className="navbar-inverse side-collapse in">
              <Nav bsStyle="pills" justified activeKey={videoId} onSelect={this.handleSelect}>
                { this.renderVideos() }
              </Nav>
            </div>
          </Grid>
          <section className="video">
            <Grid>
              {/* Aqui vai o Id dos videos  */}
              <Video videoId={this.state.videoId ? this.state.videoId :  videoId} />
            </Grid>
          </section>
          <section>
            <Grid>
              <Button bsStyle="warning" onClick={this.handleFormButton}>ENTRAR NA LISTA VIP</Button>
              { this.state.showForm ? <Form
                title="Siga os passos abaixo corretamente para você se inscrever."
                action="https://app.convertkit.com/landing_pages/266223/subscribe"
                pageId="266223"
                closeForm={this.closeForm} /> : null }
            </Grid>
          </section>
          <section>
            <Grid>
              <FacebookProvider appId="119817438197601">
                <Comments href="http://euinfluencer.com" width="100%"/>
              </FacebookProvider>
            </Grid>
          </section>
        </Layout>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { videos: state.videos };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchVideos: () => dispatch(fetchVideos())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Week);
