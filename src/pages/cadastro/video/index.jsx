import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageLayout from '../../../components/PageLayout';
import useForm from '../../../hooks/useForm';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const { handleChange, values } = useForm({

  });

  useEffect(() => {
    categoriesRepository.getAll()
      .then((categoriesFromServer) => {
        setCategories(categoriesFromServer);
      });
  }, []);

  return (
    <PageLayout>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        // poderia passar titulo e id pro FormField?
        const chosen = categories.find(({ category }) => category.titulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: chosen.id,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          type="text"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categories.map(({ titulo }) => titulo)}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Nova categoria
      </Link>
    </PageLayout>
  );
}

export default CadastroVideo;
