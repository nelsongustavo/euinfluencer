import React from 'react';
import Layout from '../../shared';
import { Grid } from 'react-bootstrap';
import './thanks.css';

export default () => {
  return (
    <div className="thanks">
      <Layout>
        <section>
          <Grid>
            <h1>Obrigado por se inscrever!</h1>
          <section>
            <p>Em breve você vai receber um e-mail de confirmação, confirme sua inscrição e receba o e-book.</p>
            <p>Não se esqueça de olhar a caixa de spam o e-mail pode ter ido parar lá por engano.</p>
          </section>
          </Grid>
        </section>
      </Layout>
    </div>
  );
}
