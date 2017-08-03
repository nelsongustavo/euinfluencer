import React from 'react';
import { Button} from 'react-bootstrap';
import ga from 'react-ga';
import './main.css';

export default () => {
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
      <form action="https://***REMOVED***.us13.list-manage.com/subscribe/post" method="post" className="validate" noValidate>
        <input type="hidden" name="u" value="cc49294c8f423b98bac86a0e0" />
        <input type="hidden" name="id" value="d53147f679" />
        <Button type="submit" bsStyle="danger" bsSize="large" onClick={addEvent}>FAZER DOWNLOAD DO E-BOOK GRÁTIS</Button>
      </form>
    </div>
  );
}

function addEvent() {
  ga.event({
    category: 'User',
    action: 'CLICKED DOWNLOAD BUTTON'
  });
}
