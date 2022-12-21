import React from 'react';
import { Link } from 'react-router-dom';

import BGImage from '../../assets/images/bg.jpg';
import LogoBranca from '../../assets/images/logo-branca.png';
import Elm3D from '../../assets/images/elementos-3d.png';

import { FaPlus } from 'react-icons/fa';

import { Container, Content, ContentTop, Header, OutlinedButton } from './styles';

const Initial: React.FC = () => {
  return (
    <Container>
      <ContentTop backgroundImage={BGImage}>
        <Header>
          <img src={LogoBranca} alt="Logo do projeto" />

          <Link to='/login'>
            <p>Entrar</p>
          </Link>
        </Header>
        <Content>
          <div>
            <h1>CADASTRE OS SEUS FILMES AQUI</h1>
            <hr />
            <h3>Um espaço totalmente novo para você guardar os seus filmes favoritos e aqueles que você ainda pretende assistir.</h3>
            <OutlinedButton>Adicionar <FaPlus /></OutlinedButton>
          </div>
          <div>
            <img src={Elm3D} alt="Imagem 3D de Icones" />
          </div>
        </Content>
      </ContentTop>
    </Container>
  );
}

export default Initial;