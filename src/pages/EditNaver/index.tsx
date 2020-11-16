import React from 'react';
import api from '../../services/api';
import { useParams } from 'react-router-dom';

import { format, parseISO } from 'date-fns';
import closeImg from '../../assets/close.svg';
import arrowBackImg from '../../assets/back_arrow.svg';

import Header from '../../components/Header';
import InputBlock from '../../components/InputBlock';
import BlackButton from '../../components/BlackButton';
import FeedBack from '../../components/FeedBack';

import * as Styles from './styles';

interface NaverDataProps {
  admission_date: string;
  birthdate: string;
  id: string;
  job_role: string;
  name: string;
  project: string;
  url: string;
  user_id: string;
}

const EditNaver: React.FC = () => {
  const { cardEditId }: any = useParams();
  const [naverData, setNaverData] = React.useState({} as NaverDataProps);
  const [modalState, setModalState] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get<NaverDataProps>(`/navers/${cardEditId}`);
        setNaverData(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [cardEditId]);

  const handleSubmit = React.useCallback(
    async (data: NaverDataProps) => {
      const birthdate = parseISO(data.birthdate);
      const admission_role = parseISO(data.admission_date);
      try {
        await api.put(`/navers/${cardEditId}`, {
          job_role: data.job_role,
          admission_date: format(admission_role, 'd/MM/y'),
          birthdate: format(birthdate, 'd/MM/y'),
          name: data.name,
          project: data.project,
          url: data.url,
        });
        setModalState(true);
      } catch (e) {
        console.log(e);
      }
    },
    [cardEditId],
  );

  const handleGoBack = React.useCallback(() => setModalState(false), []);

  if (isLoading) {
    return <></>;
  }

  return (
    <>
      <FeedBack isOpen={modalState}>
        <Styles.FeedBackContent>
          <div>
            <h1>Naver editado</h1>
            <img
              src={closeImg}
              data-cy="go-back"
              alt="Voltar"
              onClick={handleGoBack}
            />
          </div>
          <span>Naver editado com sucesso!</span>
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
              <h1>Editar Naver</h1>
            </Styles.TopContent>
            <Styles.Invisible />
            <InputBlock
              placeholder="Nome"
              type="text"
              label="Nome"
              name="name"
              data-cy="name"
              required
              defaultValue={naverData.name}
            />
            <InputBlock
              placeholder="Cargo"
              type="text"
              label="Cargo"
              name="job_role"
              data-cy="job_role"
              required
              defaultValue={naverData.job_role}
            />
            <InputBlock
              placeholder="Nascimento"
              type="date"
              label="Nascimento"
              name="birthdate"
              data-cy="birthdate"
              required
              defaultValue={format(
                parseISO(naverData.birthdate),
                'y/d/MM',
              ).replace(/\//g, '-')}
            />
            <InputBlock
              placeholder="Tempo de empresa"
              type="date"
              label="Tempo de empresa"
              name="admission_date"
              data-cy="admission_date"
              required
              defaultValue={format(
                parseISO(naverData.admission_date),
                'y/d/MM',
              ).replace(/\//g, '-')}
            />
            <InputBlock
              placeholder="Projetos que participou"
              type="text"
              label="Projetos que participou"
              name="project"
              data-cy="project"
              required
              defaultValue={naverData.project}
            />
            <InputBlock
              placeholder="URL da foto do Naver"
              type="url"
              label="URL da foto do Naver"
              name="url"
              data-cy="url"
              required
              defaultValue={naverData.url}
            />
            <Styles.Invisible />
            <BlackButton data-cy="edit" width="176px" text="Editar" />
          </Styles.Form>
        </Styles.Main>
      </Styles.Container>
    </>
  );
};

export default EditNaver;
