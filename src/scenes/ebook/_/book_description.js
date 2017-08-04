import React, { Component } from 'react';
import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import ga from 'react-ga';
import './main.css';

export default class BookDescription extends Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  addEvent() {
    ga.event({
      category: 'User',
      action: 'CLICKED DOWNLOAD BUTTON'
    });
  }

  render() {
    return (
      <div className="book-description">
        <h1>10 PASSOS PARA SE TORNAR UM INFLUENCIADOR DIGITAL</h1>
        <section>
          <p>Por Oney Araújo</p>
          <p>
            Nesse e-book eu concentrei os meus 7 anos de trabalho com mídias sociais em 10
            passos simples para você entrar e compreender de uma vez por todas o mundo dos
            influenciadores digitais.
          </p>
          <p>
            Para ser sincero, eu gostaria muito de ter acesso a algo semelhante quando comecei.
            O diferencial desse material é o impacto que ele vai gerar na sua forma de produzir conteúdo,
            agir e pensar daqui pra frente.
          </p>
          <p>
            Então aproveite, leia e releia estas instruções e coloque cada vírgula em prática,
            em pouco tempo você verá o seu conteúdo decolando nesse mundão digital.
          </p>
        </section>
        <Button type="submit" bsStyle="danger" bsSize="large" onClick={this.openModal}>FAZER DOWNLOAD DO E-BOOK GRÁTIS</Button>

        <Modal show={this.state.modalIsOpen} onHide={this.closeModal}>
         <Modal.Header closeButton>
           <Modal.Title>Siga os passos abaixo corretamente para você se inscrever e fazer o download.</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <form id="ktv2-form-44514" className="form" accept-charset="UTF-8" method="post" action="https://www.klickmail.com.br/api/subscriber/signin.html" >
            <input type="hidden" id="FormField_ApiKey" name="apikey" value="11btzsjkz8zec7d" />
            <FormGroup controlId="formInlineEmail">
              <span className="text-step">1° PASSO</span>
              <ControlLabel>Preencha os campos abaixo</ControlLabel>
              <FormControl type="email" placeholder="Entre com o seu melhor E-mail" id="FormField_EmailAddress" name="email" bsSize="large"/>
            </FormGroup>
            <FormGroup id="step-2">
              <span className="text-step2">2° PASSO</span>
              <label>Clique e confirme sua inscrição</label>
              <Button type="submit" bsStyle="danger" bsSize="large">
                BAIXE GRÁTIS!
              </Button>
            </FormGroup>
          </form>
         </Modal.Body>
         <Modal.Footer>
           <p>Suas informações estão seguras.</p>
         </Modal.Footer>
       </Modal>
      </div>
    );
  }
}
