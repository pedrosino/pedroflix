import React from 'react';
import PageLayout from '../../../components/PageLayout';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  return (
    <PageLayout>
      <h1>Cadastro de Categoria</h1>

      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <Link to="/">
        Voltar
      </Link>
    </PageLayout>
  );
}

export default CadastroCategoria;