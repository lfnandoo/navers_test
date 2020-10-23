import React from 'react';
import api from '../../services/api';
import { useParams } from 'react-router-dom';

import InputBlock from '../../components/InputBlock';

import arrowBackImg from '../../assets/back_arrow.svg';
import Header from '../../components/Header';
import BlackButton from '../../components/BlackButton';

import * as Styles from './styles';

const EditNaver: React.FC = () => {
  const { cardEditId }: any = useParams();

  React.useEffect(() => {
    (async () => {
      try {
        const res = await api.get(`/navers/${cardEditId}`);
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const handleSubmit = React.useCallback((data) => {
    console.log(data);
  }, []);

  return (
    <Styles.Container>
      <Header />

      <Styles.Main>
        <Styles.Form onSubmit={handleSubmit}>
          <Styles.TopContent>
            <Styles.GoBack to="/home">
              <img src={arrowBackImg} alt="Voltar para home" />
            </Styles.GoBack>
            <h1>Editar Naver</h1>
          </Styles.TopContent>
          <Styles.Invisible />
          <InputBlock
            placeholder="Nome"
            type="text"
            label="Nome"
            name="name"
            required
          />
          <InputBlock
            placeholder="Cargo"
            type="text"
            label="Cargo"
            name="job_role"
            required
          />
          <InputBlock
            placeholder="Nascimento"
            type="date"
            label="Nascimento"
            name="birthdate"
            required
          />
          <InputBlock
            placeholder="Tempo de empresa"
            type="date"
            label="Tempo de empresa"
            name="admission_date"
            required
          />
          <InputBlock
            placeholder="Projetos que participou"
            type="text"
            label="Projetos que participou"
            name="project"
            required
          />
          <InputBlock
            placeholder="URL da foto do Naver"
            type="url"
            label="URL da foto do Naver"
            name="url"
            required
          />
          <Styles.Invisible />
          <BlackButton width="176px" text="Salvar" />
        </Styles.Form>
      </Styles.Main>
    </Styles.Container>
  );
};

export default EditNaver;
