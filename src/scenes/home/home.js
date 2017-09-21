import React, { Component } from 'react';
import Layout from '../../shared/layout';
import About from '../../shared/about';
import Form from '../../shared/form';
import { Grid, Button } from 'react-bootstrap';
import './home.css';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    };
    this.handleFormButton = this.handleFormButton.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  handleFormButton() {
    this.setState({
     showForm: true
   });
  }

  closeForm() {
    this.setState({
      showForm: false
    })
  }

  redirect() {
    this.props.history.push("/obrigado");
  }

  render() {
    return (
      <div className="home">
        <Layout>
          <div className="banner">
            <Grid>
              <h1>AS INSCRIÇÕES PARA O EU INFLUENCER ESTÃO ENCERRADAS</h1>
              <h2>Você pode se cadastrar na lista de espera clicando no botão abaixo.</h2>
              <Button bsStyle="warning" onClick={this.handleFormButton}>QUERO ENTRAR NA LISTA DE ESPERA</Button>
              <p>Caso apareça alguma vaga <span>VAMOS AVISAR VOCÊ PRIMEIRO!</span></p>
              { this.state.showForm ? <Form
                title="Siga os passos abaixo corretamente para se inscrever."
                action="https://app.convertkit.com/landing_pages/266223/subscribe"
                pageId="266223"
                redirect={this.redirect}
                closeForm={this.closeForm} /> : null }
            </Grid>
          </div>
          <About/>
        </Layout>
      </div>
    );
  }
}
