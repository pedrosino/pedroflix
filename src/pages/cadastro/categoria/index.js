import React, { useState } from 'react';
import PageLayout from '../../../components/PageLayout';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [dados, setDados] = useState(valoresIniciais);

  function setDado(key, value) {
    // key describes the field
    setDados({
      ...dados,
      [key]: value, // transforma key em um nome de propriedade
    })
  }

  function handleChange(info){
    // "extrai" valores de info.target
    const {name, value} = info.target;
    setDado(name, value);
  }

  return (
    <PageLayout>
      <h1>Cadastro de Categoria</h1>

      <form style={{ background: dados.cor }}onSubmit={function handleSubmit(info) {
        info.preventDefault();
        setCategorias([
          ...categorias,
          dados
        ]);

        setDados(valoresIniciais);
        console.log('apagou');
      }}>
        
        <FormField
          label="Nome: "
          type="text"
          name="nome"
          valor={dados.nome}
          onChange={handleChange}
        />
        
        {/*<div>
          <label>
            Descrição:
            <textarea
              type="text"
              name="descricao"
              value={dados.descricao}
              onChange={handleChange}
              />
          </label>
        </div>*/}

        <FormField
          label="Descrição: "
          type="area"
          name="descricao"
          valor={dados.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor: "
          type="color"
          name="cor"
          valor={dados.cor}
          onChange={handleChange}
        />

        {/*<div>
          <label>
            Cor:
            <input
              type="color"
              name="cor"
              value={dados.cor}
              onChange={handleChange}
              />
          </label>
        </div>*/}

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria.nome}${indice}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Voltar
      </Link>
    </PageLayout>
  );
}

export default CadastroCategoria;