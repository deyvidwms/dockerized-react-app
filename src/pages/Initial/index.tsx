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
            <h1>Seja bem-vindo ao nosso site!</h1>
            <hr />
            <h3>
              Aqui você pode cadastrar todos os filmes que já assistiu e compartilhar suas opiniões com outros fãs de cinema. <br />
              Cadastre-se para começar a registrar os filmes que você assistiu. <br />
              Você pode adicionar o título, o ano de lançamento, a classificação indicativa, sua nota de avaliação e comentários sobre o filme. <br />
              Aproveite para descobrir novos títulos e compartilhá-los com seus amigos!
            </h3>
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