import React, { Component } from 'react';
import _ from "lodash";
import { connect } from "react-redux";
import { fetchVideos } from "../../flux/actions";
import Video from './_/video';
import Layout from '../../shared/layout';
import { Grid, Nav, NavItem } from 'react-bootstrap';
import FacebookProvider, { Comments } from 'react-facebook';
import './week.css';

class Week extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videoId: ""
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedKey) {
    this.setState({videoId: selectedKey})
  }

  componentDidMount() {
     this.props.fetchVideos()
  }

  renderVideos() {
    return _.map(this.props.videos, video => {
      return (
        <NavItem
          key={video.id}
          className={video.id == 1 ? "first" : ""}
          eventKey={video.yt_id}
          title={video.title}
          disabled={!video.is_active}>
          {video.title + " " + video.data}
        </NavItem>
      );
    });
  }

  render() {
    const { videos } = this.props;
    let active = "";

    if (!videos) {
      return <div>Loading...</div>;
    }

    if (videos) {
      active = "nOQipNj-Nv8";
      this.setState({videoId: active});
    }

    return (
      <div className="week">
        <Layout>
          <header>
            <Grid>
              <h1>I SEMANA DO INFLUENCIADOR DIGITAL</h1>
              <h2>Transformando pessoas comuns em Influenciadores Digitais</h2>
            </Grid>
          </header>
          <Grid>
            <div className="navbar-header">
              <button data-toggle="collapse-side" data-target=".side-collapse" data-target-2=".side-collapse-container" type="button" className="navbar-toggle pull-left"><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span></button>
            </div>
            <div className="navbar-inverse side-collapse in">
              <Nav bsStyle="pills" justified activeKey={active} onSelect={this.handleSelect}>
                { this.renderVideos() }
              </Nav>
            </div>
          </Grid>
          <section className="video">
            <Grid>
              {/* Aqui vai o Id dos videos  */}
              <Video videoId={this.state.videoId} />
            </Grid>
          </section>
          {/* <section>
            <Grid>
              <Button bsStyle="warning">QUERO ME TORNAR UM INFLUENCIADOR</Button>
            </Grid>
          </section> */}
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
