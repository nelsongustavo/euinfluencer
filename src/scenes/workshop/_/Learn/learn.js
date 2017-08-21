import React from 'react';
import './learn.css';
import { Row, Col } from 'react-bootstrap';

export default () => {
  return (
    <div className="learn">
      <section>
        <h2>O QUE VOCÊ APRENDERÁ NA I SEMANA DO INFLUENCIADOR DIGITAL</h2>
      </section>
      <Row className="show-grid">
        <Col xs={12} md={6}>
          <div className="item">
            <span className="ico">
              <img src="https://firebasestorage.googleapis.com/v0/b/***REMOVED***.appspot.com/o/bar-chart%20(1).png?alt=media&token=5452691f-dfd8-4322-a9f7-aed4d9dc2c86"></img>
            </span>
            <h3>COMO CONSTRUIR SUA AUDIÊNCIA</h3>
            <p>Essa é o primeiro passo para quem está começando do zero ou se já começou mas tem a sensação que  seu crescimento não está na velocidade que gostaria. A partir do momento que você entender como sua audiência engaja com o seu conteúdo e compartilha ele com outras pessoas,  você verá o quão simples é o processo de crescimento em suas suas redes sociais.</p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="item">
            <span className="ico">
              <img src="https://firebasestorage.googleapis.com/v0/b/***REMOVED***.appspot.com/o/brainstorm.png?alt=media&token=873e6971-2066-4600-80b6-d91c6547ca5d"></img>
            </span>
            <h3>5 ESTRATÉGIAS PARA ATRAIR SEGUIDORES</h3>
            <p>O trabalho constante de um Influenciador Digital é atrair novos seguidores, e existem vários tipos e formas para fazer isso. Vamos do mais simples ao mais complexo. Você pode aplicar e testar em suas redes sociais imediatamente após aprender.</p>
          </div>
        </Col>
      </Row>
      <Row className="show-grid">
        <Col xs={12} md={6}>
          <div className="item">
            <span className="ico">
              <img src="https://firebasestorage.googleapis.com/v0/b/***REMOVED***.appspot.com/o/handshake.png?alt=media&token=74ae6c05-4c30-4e20-bc9f-0c8312796f1d"></img>
				    </span>
            <h3>COMO CONSEGUIR AÇÕES PUBLICITÁRIAS</h3>
            <p>Vai chegar o momento em que você fará sua primeira ação publicitária. Aqui você vai aprender como se posicionar quando o assunto negociação. Vou mostrar como iniciar uma conversa e apresentar suas redes sociais de maneira profissional para fechar pequenas e grandes ações.</p>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div className="item">
            <span className="ico">
              <img src="https://firebasestorage.googleapis.com/v0/b/***REMOVED***.appspot.com/o/question.png?alt=media&token=602c592e-5519-431f-9de7-865bc228a949"></img>
            </span>
            <h3>TIRA DÚVIDAS</h3>
            <p>Estarei online com você para tirar suas dúvidas e poder te colocar na direção certa. Aproveite porque você vai ter uma consultoria gratuita.</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
