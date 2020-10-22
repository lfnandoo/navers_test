import React from 'react';

import Header from '../../components/Header';

import arrowBackImg from '../../assets/back_arrow.svg';

import * as Styles from './styles';
import InputBlock from '../../components/InputBlock';
import BlackButton from '../../components/BlackButton';

const CreateNaver: React.FC = () => {
  const handleSubmit = React.useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
    <Styles.Container>
      <Header />
      <Styles.Main>
        <Styles.Form onSubmit={handleSubmit}>
          <Styles.TopContent>
            <Styles.Back to="/home">
              <img src={arrowBackImg} alt="Back" />
            </Styles.Back>
            <h1>Adicionar Naver</h1>
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
            placeholder="Idade"
            type="number"
            label="Idade"
            name="years_old"
            required
          />
          <InputBlock
            placeholder="Tempo de empresa"
            type="text"
            label="Tempo de empresa"
            name="company_time"
            required
          />
          <InputBlock
            placeholder="Projetos que participou"
            type="text"
            label="Projetos que participou"
            name="all_projects"
            required
          />
          <InputBlock
            placeholder="URL da foto do Naver"
            type="url"
            label="URL da foto do Naver"
            name="image_link"
            required
          />
          <Styles.Invisible />
          <BlackButton width="176px" text="Salvar" />
        </Styles.Form>
      </Styles.Main>
    </Styles.Container>
  );
};

export default CreateNaver;
