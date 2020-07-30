import React from 'react';
import PageLayout from '../../../components/PageLayout';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  return (
    <PageLayout>
      <h1>Cadastro de Categoria</h1>

      <Link to="/">
        Voltar
      </Link>
    </PageLayout>
  );
}

export default CadastroCategoria;