import React from 'react';
import Layout from '../../shared/layout';
import { Grid } from 'react-bootstrap';
import ReactPixel from 'react-facebook-pixel';
import './thanks.css';

export default () => {
  ReactPixel.track("CompleteRegistration", {})
  return (
    <div className="thanks">
      <Layout>
        <section>
          <Grid>
            <h1>Pronto, tudo certo!</h1>
          <section>
            <p>Agora nos vemos nos dias: 11 a 14 de Setembro.</p>
            <p>Marque na sua agenda ou no seu despertador digital.</p>
            <p>Nos vemos em breve.</p>
          </section>
          </Grid>
        </section>
      </Layout>
    </div>
  );
}
