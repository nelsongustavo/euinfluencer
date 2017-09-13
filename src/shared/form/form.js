import React, { Component } from 'react';
import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class Form extends Component {

  constructor() {
    super();

    this.state = {
      modalIsOpen: true
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

  render() {
    return (
      <div className="form">
        <Modal show={this.state.modalIsOpen} onHide={this.closeModal}>
         <Modal.Header closeButton>
           <Modal.Title>Siga os passos abaixo corretamente para você se inscrever.</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <div className="ck_form">
               <div className="ck_form_fields">
                 <form id="ktv2-form-44514" className="form" method="post" action={this.props.action} data-remote="true">
                  <input type="hidden" name="id" value={this.props.page_id} id="landing_page_id"/>
                  <FormGroup>
                    <span className="text-step">1° PASSO</span>
                    <ControlLabel>Preencha os campos abaixo</ControlLabel>
                    <FormControl type="email" placeholder="Entre com o seu melhor E-mail" id="FormField_EmailAddress" name="email" bsSize="large"/>
                  </FormGroup>
                  <FormGroup id="step-2">
                    <span className="text-step2">2° PASSO</span>
                    <label>Clique e confirme sua inscrição</label>
                  <Button type="submit" bsStyle="danger" bsSize="large" onClick={this.addEvent}>
                      ENVIAR
                  </Button>
                  </FormGroup>
                </form>
              </div>
            </div>
         </Modal.Body>
         <Modal.Footer>
           <p>Suas informações estão seguras.</p>
         </Modal.Footer>
       </Modal>
      </div>
    );
  }
}
