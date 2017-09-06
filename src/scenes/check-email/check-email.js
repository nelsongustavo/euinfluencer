import React from 'react';
import Layout from '../../shared/layout';
import { Grid } from 'react-bootstrap';
import './check-email.css';

export default () => {
  return (
    <div className="check-email">
      <Layout>
        <section>
          <Grid>
            <h1>O Primeiro passo foi concluído.</h1>
          <section>
            <p>Em breve você vai receber um e-mail de confirmação, confirme sua inscrição na I Semana do Influenciador Digital</p>
            <p>Não se esqueça de olhar a caixa de spam o e-mail pode ter ido parar lá por engano.</p>
          </section>
          </Grid>
        </section>
      </Layout>
    </div>
  );
}
