import React from 'react';
import api from '../../services/api';

import Header from '../../components/Header';

import trashIcon from '../../assets/trash.svg';
import editIcon from '../../assets/edit.svg';
import closeImg from '../../assets/close.svg';

import FeedBack from '../../components/FeedBack';
import BlackButton from '../../components/BlackButton';
import { Redirect } from 'react-router-dom';

import * as Styles from './styles';

interface NaversDataProps {
  admission_date: string;
  birthdate: string;
  id: string;
  job_role: string;
  name: string;
  project: string;
  url: string;
  user_id: string;
}

interface OpenModalAndSetCardIdProps {
  newState: boolean;
  id: string;
  setModalOpenState: React.Dispatch<React.SetStateAction<boolean>>;
  setCardId: React.Dispatch<React.SetStateAction<string>>;
}

const Home: React.FC = () => {
  const [navers, setNavers] = React.useState<Array<NaversDataProps>>([]);
  const [modalDelete, setModalDelete] = React.useState(false);
  const [modalEdit, setModalEdit] = React.useState(false);
  const [feedbackDeleteModal, setFeedbackDeleteModal] = React.useState(false);
  const [cardDeleteId, setCardDeleteId] = React.useState('');
  const [cardEditId, setCardEditId] = React.useState('');

  React.useEffect(() => {
    (async () => {
      const { data } = await api.get<NaversDataProps[]>('/navers');
      setNavers(data);
    })();
  }, []);

  const openModalAndSetCardId = React.useCallback(
    (newState, id, setModalOpenState, setCardId) => {
      setModalOpenState(newState);
      setCardId(id);
    },
    [],
  );

  const deleteCard = React.useCallback(async () => {
    try {
      await api.delete(`/navers/${cardDeleteId}`);
      openModalAndSetCardId(false, '', setModalDelete, setCardDeleteId);
      setFeedbackDeleteModal(true);
    } catch (e) {
      console.log(e);
    }
  }, [cardDeleteId]);

  const handleGoBack = React.useCallback(
    () => setFeedbackDeleteModal(false),
    [],
  );

  if (!!cardEditId) {
    return <Redirect to={`/edit/${cardEditId}`} />;
  }

  return (
    <>
      <FeedBack isOpen={modalDelete}>
        <Styles.ExcludeNaver>
          <h1>Excluir Naver</h1>
          <span>Tem certeza que deseja excluir este Naver?</span>
          <div>
            <BlackButton
              width="176px"
              text="Cancelar"
              border="1px solid var(--color-primary)"
              color="var(--color-primary)"
              backgroundColor="var(--color-background)"
              onClick={() =>
                openModalAndSetCardId(
                  false,
                  '',
                  setModalDelete,
                  setCardDeleteId,
                )
              }
            />
            <BlackButton
              width="176px"
              text="Excluir"
              onClick={deleteCard}
              border="1px solid var(--color-primary)"
            />
          </div>
        </Styles.ExcludeNaver>
      </FeedBack>
      <FeedBack isOpen={feedbackDeleteModal}>
        <Styles.FeedBackContent>
          <div>
            <h1>Naver excluído</h1>
            <img src={closeImg} alt="Voltar" onClick={handleGoBack} />
          </div>
          <span>Naver excluido com sucesso!</span>
        </Styles.FeedBackContent>
      </FeedBack>
      <Styles.Container>
        <Header />
        <Styles.Main>
          <Styles.TopContent>
            <h1>Navers</h1>
            <Styles.NewNaverButton to="/create">
              Adicionar Naver
            </Styles.NewNaverButton>
          </Styles.TopContent>
          <Styles.NaversList>
            {navers.map((naver) => {
              return (
                <Styles.NaverCard key={naver.id}>
                  <img src={naver.url} alt={naver.name} />
                  <h1>{naver.name}</h1>
                  <h2>{naver.job_role}</h2>
                  <Styles.Actions>
                    <img
                      src={trashIcon}
                      alt="Excluir"
                      onClick={() =>
                        openModalAndSetCardId(
                          true,
                          naver.id,
                          setModalDelete,
                          setCardDeleteId,
                        )
                      }
                    />
                    <img
                      src={editIcon}
                      alt="Editar"
                      onClick={() =>
                        openModalAndSetCardId(
                          true,
                          naver.id,
                          setModalEdit,
                          setCardEditId,
                        )
                      }
                    />
                  </Styles.Actions>
                </Styles.NaverCard>
              );
            })}
          </Styles.NaversList>
        </Styles.Main>
      </Styles.Container>
    </>
  );
};

export default Home;
