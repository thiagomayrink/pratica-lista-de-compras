import styled from "styled-components";

export default function Header() {
  return <Title>My Shopping List</Title>;
}

const Title = styled.h1`
  font-size: 40px;
  font-style: italic;
  font-weight: bold;
  color: #fff;
  margin-bottom: 50px;
`;
