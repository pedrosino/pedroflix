import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../../components/PageLayout';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [dados, setDados] = useState(valoresIniciais);

  function setDado(key, value) {
    // key describes the field
    setDados({
      ...dados,
      [key]: value, // transforma key em um nome de propriedade
    });
  }

  function handleChange(info) {
    // "extrai" valores de info.target
    const { name, value } = info.target;
    setDado(name, value);
  }

  return (
    <PageLayout>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={function handleSubmit(info) {
        info.preventDefault();
        setCategorias([
          ...categorias,
          dados,
        ]);

        setDados(valoresIniciais);
      }}
      >

        <FormField
          label="Nome"
          type="text"
          name="nome"
          value={dados.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="area"
          name="descricao"
          value={dados.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={dados.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => (
          <li key={`${categoria.nome}${indice}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Voltar
      </Link>
    </PageLayout>
  );
}

export default CadastroCategoria;
