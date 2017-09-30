import React from 'react';
import { Grid } from 'react-bootstrap';
import ReactPixel from 'react-facebook-pixel';
import Layout from '../../Shared/Layout';
import './Thanks.css';

export default function Thanks() {
  ReactPixel.track("CompleteRegistration", {})
  return (
    <div className="thanks">
      <Layout>
        <section>
          <Grid>
            <h1>Pronto, tudo certo!</h1>
          <section>
            <p>Agora é só aguardar para receber as melhores sacadas no seu e-mail</p>
            <p>Nos vemos em breve.</p>
          </section>
          </Grid>
        </section>
      </Layout>
    </div>
  );
}
