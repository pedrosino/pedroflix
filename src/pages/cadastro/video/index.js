import React from 'react';
import PageLayout from '../../../components/PageLayout';
import { Link } from 'react-router-dom';

function CadastroVideo() {
  return (
    <PageLayout>
      <h1>Cadastro de Vídeo</h1>

      <Link to="/cadastro/categoria">
        Nova categoria
      </Link>
    </PageLayout>
  );
}

export default CadastroVideo;