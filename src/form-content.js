import React, { Component } from 'react';
import './FormContent.css';

class FormContent extends Component {
  render() {
    return (
      <div className="form-content">
        <form action="https://canaldesucesso.us13.list-manage.com/subscribe/post" method="post" className="validate" noValidate>
          <input type="hidden" name="u" value="cc49294c8f423b98bac86a0e0" />
          <input type="hidden" name="id" value="f5a5e850b4" />
          <input type="email" className="email" placeholder="Digite o seu e-mail" name="MERGE0" id="MERGE0" defaultValue="" />
          <input type="submit" value="QUERO ME INSCREVER!" name="subscribe" className="button" />
        </form>
      </div>
    );
  }
}

export default FormContent;
