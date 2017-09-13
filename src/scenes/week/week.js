import React, { Component } from 'react';
import Video from './_/video';
import Layout from '../../shared/layout';
import $ from "jquery";
import { Grid, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import FacebookProvider, { Comments } from 'react-facebook';
import './week.css';

class WorkShop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videoId: "q-DNQMRypok"
    };
    // This binding is necessary to make `this` work in the callback
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedKey) {
    this.setState({videoId: selectedKey})
  }

  componentDidMount() {
    const sideslider = $('[data-toggle=collapse-side]');
    const sel = sideslider.attr('data-target');
    sideslider.click(function(){
      $(sel).toggleClass('in');
    });
  }

  render() {
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
              <Nav bsStyle="pills" justified activeKey={this.state.videoId} onSelect={this.handleSelect}>
                <NavItem className="first" eventKey={"nOQipNj-Nv8"} title="aula 1">Aula 01 (11/09)</NavItem>
                <NavItem eventKey={"NZdBCP8XfRg"} title="aula 2">Aula 02 (12/09)</NavItem>
                <NavItem eventKey={"q-DNQMRypok"} title="aula 3">Aula 03 (13/09)</NavItem>
                <NavItem eventKey={4} title="aula 4" disabled><Glyphicon glyph="lock" /> Aula 04 (14/09)</NavItem>
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

export default WorkShop;
