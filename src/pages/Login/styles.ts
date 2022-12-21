import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, #060F25 60%, #11182a 40%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardLogin = styled.div`
  padding: 50px;
  background-color: #FFF;
  border-radius: 6px;

  width: 100%;
  max-width: 500px;

  transition: all ease 0.3s;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 100%;
    padding: 50px 20px;
    border-radius: 02;
  }
`;

export const CardLoginHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;

  img {
    width: 220px;
  }
`;

export const CardLoginBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LoginButton = styled.div`
  display: flex;

  button {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    color: #0086D4;

    width: 100%;
    padding: 12px;
    margin-top: 10px;
    
    border: 2px solid #0086D4;
    border-radius: 3px;

    background-color: transparent;
    
    transition: all ease 0.3s;
    cursor: pointer;

    &:hover,
    &:focus {
      color: #FFFFFF;
      background-color: #0086D4;
    }
  }
`;

export const CardLoginFooter = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    text-align: center;
    margin-bottom: 15px;

    a {
      margin-left: 5px;
      text-decoration: none;
      color: #0086D4;
      transition: all ease 0.3s;

      &:hover,
      &:focus {
        opacity: 0.9;
      }
    }
  }

  a {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    text-decoration: none;

    color: #aaa;
    transition: all ease 0.3s;

    &:hover {
      color: #888;
    }
  }
`;