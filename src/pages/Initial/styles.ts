import styled from 'styled-components';

type PropsContentTop = {
  backgroundImage: string;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const ContentTop = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(0deg, #10265c99, #10265c99), url(${(props: PropsContentTop)=>(props.backgroundImage)});
  background-size: cover;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 50px;
  border-bottom: 1px solid #CCC;

  img {
    width: 150px;
  }

  a {
    text-decoration: none;

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
      color: #FFF;
      transition: all ease 0.3s;
      cursor: pointer;
  
      &:hover {
        color: #CCC;
      }
    }
  }

`;

export const OutlinedButton = styled.button`
  width: fit-content;

  display: flex;
  align-items: center;

  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  color: #FFF;

  background-color: transparent;
  padding: 10px 50px;

  border: 2px solid #FFF;
  border-radius: 3px;

  transition: all ease 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #FFF;
    color: #000;
  }

  svg {
    margin-left: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  margin: 100px 50px;

  div {
    width: 50%;

    &:first-child {
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        max-width: 660px;
        font-family: 'Montserrat', sans-serif;
        font-size: 3.75rem;
        color: #FFF;
      }

      hr {
        width: 250px;
        height: 2px;
        border: none;
        background-color: #FFF;
        margin: 20px 0;
      }

      h3 {
        max-width: 730px;
        font-family: 'Roboto', sans-serif;
        font-size: 2rem;
        color: #CCC;
        margin-bottom: 20px;
      }
    }

    &:last-child {
      display: flex;
      justify-content: center;

      img {
        width: 600px;
      }
    }
  }
`;