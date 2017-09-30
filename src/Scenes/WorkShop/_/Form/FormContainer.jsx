import React from 'react';
import FacebookProvider, { Like } from 'react-facebook';
import { YouTubeButton } from 'react-social-sharebuttons';
import FormContent from './Form';

export default function FormContainer() {
  return (
    <div className="form-container">
      <FormContent
        imageUrl="https://firebasestorage.googleapis.com/v0/b/euinfluencer.appspot.com/o/1semana.png?alt=media&token=be4375cd-d3a7-43ed-9ce0-e1a0e4b3022f"
        title="Uma semana de Vídeos e Aulas, totalmente dedicado a mostrar o Passo a Passo para:"
        subTitle1="1 - Alavancar sua audiência e engajamento usando técnicas simples ou..."
        subTitle2="2 - Como se tornar um Influenciador Digital do zero..."
      />
      <FacebookProvider appId="119817438197601">
        <Like href="https://www.facebook.com/oney.araujo/" colorScheme="dark" showFaces share />
      </FacebookProvider>
      <YouTubeButton channel="niimakeup" />
    </div>
  );
}
