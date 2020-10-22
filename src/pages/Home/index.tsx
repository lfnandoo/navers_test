import React from 'react';
import api from '../../services/api';

import Header from '../../components/Header';

import trashIcon from '../../assets/trash.svg';
import editIcon from '../../assets/edit.svg';

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

const Home: React.FC = () => {
  const [navers, setNavers] = React.useState<Array<NaversDataProps>>([]);

  React.useEffect(() => {
    (async () => {
      const { data } = await api.get<NaversDataProps[]>('/navers');
      setNavers(data);
    })();
  }, []);

  return (
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
                  <img src={trashIcon} alt="trash" />
                  <img src={editIcon} alt="trash" />
                </Styles.Actions>
              </Styles.NaverCard>
            );
          })}
        </Styles.NaversList>
      </Styles.Main>
    </Styles.Container>
  );
};

export default Home;
