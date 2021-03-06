import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'; // 2
import PageDefault from '../../../components/PageDefault'; // 3 
import useForm from '../../../Hooks'; // 4
import FormField from '../../../components/FormField'; // 5
import Button from '../../../components/Button'; // 6
import categoriasRepository from '../../../repositores/categorias';
import {TableC} from '../style';

function CadastroCategoria() {
  const history = useHistory();
  
  const table = {
    width: '100%',
    marginTop: '20px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: '10px',
    border: '1px solid white',
    color: 'white'
  };

  const tableth = {
    paddingTop: '12px',
    paddingBottom: '12px',
    textAlign: 'center',
    backgroundColor: 'green',
    color: 'black'

  };

  const valoresIniciais = {
    nome: '',
    text: '',
    cor: '',
  };

  const { handleChange, values } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://hiroflix.herokuapp.com/categorias';

    fetch(URL_TOP)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  const listC = (
    <table style={table}>
      <tbody>
        <tr>
          <th style={tableth}>Categorias</th>
        </tr>
      </tbody>
      {categorias.map((categoria) => (
        <tbody key={`${categoria.titulo}`}>
          <TableC fieldColor={categoria.cor}>
            <td style={{ padding: '5px', textAlign: 'center' }}>
              {categoria.titulo}
            </td>
          </TableC>
        </tbody>
      ))}
    </table>
  );

  return (
    
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault()

        categoriasRepository
          .create({
            titulo: values.titulo,
            cor: values.cor,
            text: values.text,
          })
          .then(() => {
            console.log('Cadastrou com sucesso!');
            history.push('/');
          })

        setCategorias([...categorias, values])
      }}
      
      >

        <FormField
          label="Título da Categoria"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="text"
          value={values.text}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div class="loading">
          {/* Loading... */}
          <div class="obj"></div>
          <div class="obj"></div>
          <div class="obj"></div>
          <div class="obj"></div>
          <div class="obj"></div>
          <div class="obj"></div>
          <div class="obj"></div>
          <div class="obj"></div>
        </div>
      )}
        
      {listC}

    </PageDefault>
  );
}

export default CadastroCategoria;