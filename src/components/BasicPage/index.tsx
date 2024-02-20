import styled from "styled-components";
import Menu from "../Menu";
import Footer from "../Footer";
import { BasicPageProps } from "./types";

function BasicPage({ children, searchComponent = null}: BasicPageProps) {
  return (
    <Container>
      <Menu searchComponent={searchComponent}/>
      <ChildrenContainer>{children}</ChildrenContainer>
      <Footer />
    </Container>
  );
}

export default BasicPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: rgb(39, 43, 51);
`;

const ChildrenContainer = styled.div`
  flex: 1;
`;
