import React from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './About.css';

export default function About() {
  return (
    <section className="about">
      <Grid>
        <Row>
          <Col md={3} mdOffset={2}>
            <Image
              className="center-block"
              src="https://firebasestorage.googleapis.com/v0/b/euinfluencer.appspot.com/o/oney_redondo.png?alt=media&token=98e4f209-c3ab-4a7c-96c4-35029a6751ab"
              rounded
            />
          </Col>

          <Col md={7} >
            <div>
              <h3>Sobre o Autor</h3>
                <p>
                  Possui 7 anos como influenciador digital. É expert em redes sociais,
                  possui 2 canais no Youtube com mais de 300 mil inscritos e atua no
                  backstage do canal da blogueira Nicolle Rocha, que recentemente alcançou a marca de 1 Milhão de inscritos.
                </p>
                <p>
                  É também um dos 12 primeiros canais do Brasil a entrar para a 1ª turma do Youtube NextUp (2016)
                  onde conheceu a plataforma dentro do Youtube Space/SP. Também presta consultoria de marketing de redes
                  sociais para microempresas e microinfluenciadores.
                </p>
            </div>
          </Col>
        </Row>
      </Grid>
    </section>
  );
}
