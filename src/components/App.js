import styled, { createGlobalStyle } from "styled-components";

import backgroundImage from "../images/background.jpg";

import Header from "./Header";
import ShoppingList from "./ShoppingList";

export default function App() {
  return (
    <Container>
      <Header />
      <ShoppingList />
      <GlobalStyle />
    </Container>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    background-image: url(${backgroundImage});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
`;

const Container = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
