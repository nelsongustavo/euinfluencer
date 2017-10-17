import React, { Component } from 'react';
import { connect } from "react-redux";
import { addUser } from "../../flux/actions";
import axios from "axios";
import './Form.css';
import { Button, Modal, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class Form extends Component {

  constructor() {
    super();

    this.state = {
      email: "",
      message: "",
      emailValid: false,
      formValid: false,
      modalIsOpen: true
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false}, () => {
      this.props.closeForm();
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.closeModal();

    axios.post(this.props.action, {
      email: this.state.email
    })
    .then(() => {
      const user = JSON.parse(localStorage.user);
      if (user) {
        user.email = this.state.email;
        this.props.addUser(user, (userId) => {
          user.id = userId;
          localStorage.user = JSON.stringify(user);
        });
      }
    }).then(() => {
      this.props.redirect();
    });
  }

  onInputChange(event) {
    const email = event.target.value;
    this.setState({ email: email }, () => { this.validateField(email) });
  }

  validateField(value) {
    let emailValid = this.state.emailValid;
    let message = this.state.message;

    emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    message = emailValid ? '' : `${value} não é um E-mail válido`;
    this.setState({message: message, emailValid: emailValid}, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid});
  }

  render() {
    return (
      <div className="form">
        <Modal show={this.state.modalIsOpen} onHide={this.closeModal}>
         <Modal.Header closeButton>
           <Modal.Title>{this.props.title}</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <div className="ck_form">
               <div className="ck_form_fields">
                 <form id="ktv2-form-44514" className="form" method="post" action={this.props.action} onSubmit={this.onSubmitHandler} data-remote="true">
                  <input type="hidden" name="id" value={this.props.pageId} id="landing_page_id" />
                  <FormGroup>
                    <span className="text-step">1° PASSO</span>
                    <ControlLabel>Preencha os campos abaixo</ControlLabel>
                    <FormControl
                      type="email"
                      placeholder="Entre com o seu melhor E-mail"
                      id="FormField_EmailAddress"
                      name="email"
                      bsSize="large"
                      value={this.state.email}
                      onChange={this.onInputChange}
                    />
                  </FormGroup>
                  <FormGroup id="step-2">
                    <span className="text-step2">2° PASSO</span>
                    <label>Clique e confirme sua inscrição</label>
                  <Button type="submit" bsStyle="danger" bsSize="large" disabled={!this.state.formValid}>
                      ENVIAR
                  </Button>
                  <div className="result">{ this.state.message }</div>
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

function mapStateToProps(state) {
  return { user: state.user };
}

function mapDispatchToProps(dispatch) {
  return {
    addUser: (user, callback) => dispatch(addUser(user, callback))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
