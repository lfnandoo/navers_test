import React from 'react';

import Header from '../../components/Header';
import BlackButton from '../../components/BlackButton';

import naverImg from '../../assets/naver.png';
import trashIcon from '../../assets/trash.svg';
import editIcon from '../../assets/edit.svg';

import * as Styles from './styles';

const Home: React.FC = () => {
  return (
    <Styles.Container>
      <Header />
      <Styles.Main>
        <Styles.TopContent>
          <h1>Navers</h1>
          <BlackButton text="Adicionar Naver" width="176px" />
        </Styles.TopContent>
        <Styles.NaversList>
          <Styles.NaverCard>
            <img src={naverImg} alt="Juliano Reis" />
            <h1>Juliano Reis</h1>
            <h2>Front-end Developer</h2>
            <Styles.Actions>
              <img src={trashIcon} alt="trash" />
              <img src={editIcon} alt="trash" />
            </Styles.Actions>
          </Styles.NaverCard>
          <Styles.NaverCard>
            <img src={naverImg} alt="Juliano Reis" />
            <h1>Juliano Reis</h1>
            <h2>Front-end Developer</h2>
            <Styles.Actions>
              <img src={trashIcon} alt="trash" />
              <img src={editIcon} alt="trash" />
            </Styles.Actions>
          </Styles.NaverCard>
          <Styles.NaverCard>
            <img src={naverImg} alt="Juliano Reis" />
            <h1>Juliano Reis</h1>
            <h2>Front-end Developer</h2>
            <Styles.Actions>
              <img src={trashIcon} alt="trash" />
              <img src={editIcon} alt="trash" />
            </Styles.Actions>
          </Styles.NaverCard>
          <Styles.NaverCard>
            <img src={naverImg} alt="Juliano Reis" />
            <h1>Juliano Reis</h1>
            <h2>Front-end Developer</h2>
            <Styles.Actions>
              <img src={trashIcon} alt="trash" />
              <img src={editIcon} alt="trash" />
            </Styles.Actions>
          </Styles.NaverCard>
        </Styles.NaversList>
      </Styles.Main>
    </Styles.Container>
  );
};

export default Home;
