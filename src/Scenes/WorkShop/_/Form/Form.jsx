import React, { Component } from 'react';
import ga from 'react-ga';
import { Button, FormGroup, FormControl } from 'react-bootstrap';
import './Form.css';

class Form extends Component {

  addEvent() {
    ga.event({
      category: 'User',
      action: 'Clicked Subscribe Button'
    });
  }

  render() {
    return (
      <div className="form-content">
        <img className="form-image" src={this.props.imageUrl} />
        <h1>{this.props.title}</h1>
        <p>{this.props.subTitle1}</p>
        <p>{this.props.subTitle2}</p>
        <form action="https://app.convertkit.com/landing_pages/254516/subscribe.html" data-remote="true" method="post" noValidate>
          <input type="hidden" name="redirect" value="http://euinfluencer.com/check-email" />
          <input type="hidden" name="id" value="254516" id="landing_page_id" />
          <input type="hidden" name="ck_form_recaptcha" value="" id="ck_form_recaptcha" />
          <FormGroup bsSize="large">
            <FormControl type="email" className="email" placeholder="Digite o seu e-mail" defaultValue="" name="email" />
          </FormGroup>
          <Button type="submit" className="button" bsStyle="danger" bsSize="large" onClick={this.addEvent}>
            QUERO PARTICIPAR
          </Button>
        </form>
        <p className="secure">Suas informações estão seguras.</p>
      </div>
    );
  }
}

export default Form;
