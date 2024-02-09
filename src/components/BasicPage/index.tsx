import { styled } from "styled-components";
import Nav from "../Menu";
import React from "react";
import Footer from "../Footer";

interface BasicPageProps {
  children?: React.ReactElement;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: rgb(39, 43, 51);
`;

const ChildrenContainer = styled.div`
  flex: 1;
`;

function BasicPage({ children }: BasicPageProps) {
  return (
    <Container>
      <Nav />
      <ChildrenContainer>{children}</ChildrenContainer>
      <Footer />
    </Container>
  );
}

export default BasicPage;
