import React from 'react';
import api from '../../services/api';
import { format, parseISO } from 'date-fns';

import Header from '../../components/Header';

import arrowBackImg from '../../assets/back_arrow.svg';
import closeImg from '../../assets/close.svg';

import InputBlock from '../../components/InputBlock';
import BlackButton from '../../components/BlackButton';
import FeedBack from '../../components/FeedBack';

import * as Styles from './styles';

interface FormDataProps {
  job_role: string;
  admission_date: string;
  birthdate: string;
  project: string;
  name: string;
  url: string;
}

const CreateNaver: React.FC = () => {
  const [modalState, setModalState] = React.useState(false);

  const handleSubmit = React.useCallback(async (data: FormDataProps) => {
    const birthdate = parseISO(data.birthdate);
    const admission_role = parseISO(data.admission_date);
    try {
      await api.post('/navers', {
        job_role: data.job_role,
        admission_date: format(admission_role, 'd/MM/y'),
        birthdate: format(birthdate, 'd/MM/y'),
        project: data.project,
        name: data.name,
        url: data.url,
      });

      setModalState(true);
    } catch (e) {
      alert(e.message);
    }
  }, []);

  const handleGoBack = React.useCallback(() => setModalState(false), []);

  return (
    <>
      <FeedBack isOpen={modalState}>
        <Styles.FeedBackContent>
          <div>
            <h1>Naver criado</h1>
            <img src={closeImg} alt="Voltar" onClick={handleGoBack} />
          </div>
          <span>Naver criado com sucesso!</span>
        </Styles.FeedBackContent>
      </FeedBack>

      <Styles.Container>
        <Header />

        <Styles.Main>
          <Styles.Form onSubmit={handleSubmit}>
            <Styles.TopContent>
              <Styles.GoBack to="/home">
                <img src={arrowBackImg} alt="Voltar para home" />
              </Styles.GoBack>
              <h1>Adicionar Naver</h1>
            </Styles.TopContent>
            <Styles.Invisible />
            <InputBlock
              placeholder="Nome"
              type="text"
              label="Nome"
              name="name"
              data-cy="name"
              required
            />
            <InputBlock
              placeholder="Cargo"
              type="text"
              label="Cargo"
              name="job_role"
              data-cy="job_role"
              required
            />
            <InputBlock
              placeholder="Nascimento"
              type="date"
              label="Nascimento"
              name="birthdate"
              data-cy="birthdate"
              required
            />
            <InputBlock
              placeholder="Tempo de empresa"
              type="date"
              label="Tempo de empresa"
              name="admission_date"
              data-cy="admission_date"
              required
            />
            <InputBlock
              placeholder="Projetos que participou"
              type="text"
              label="Projetos que participou"
              name="project"
              data-cy="project"
              required
            />
            <InputBlock
              placeholder="URL da foto do Naver"
              type="url"
              label="URL da foto do Naver"
              name="url"
              data-cy="url"
              required
            />
            <Styles.Invisible />
            <BlackButton data-cy="submit" width="176px" text="Salvar" />
          </Styles.Form>
        </Styles.Main>
      </Styles.Container>
    </>
  );
};

export default CreateNaver;
