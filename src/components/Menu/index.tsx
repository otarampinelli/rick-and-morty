import styled from "styled-components";
import { API_DOCS_URL } from "../../contants";
import { Link } from "react-router-dom";
import { MenuProps } from "./type";

function Menu({
  searchComponent,
}: MenuProps) {
  return (
    <MenuDiv>
      <Title to="/">Rick And Morty</Title>
      <ListWrapper>
        {searchComponent && <ListItem>{searchComponent}</ListItem>}
        <ListItem>
          <MenuItemLink href={API_DOCS_URL}>Docs</MenuItemLink>
        </ListItem>
      </ListWrapper>
    </MenuDiv>
  );
}

export default Menu;

const MenuDiv = styled.nav`
  display: flex;
  align-items: center;
  background: white;
  height: 50px;
  padding: 10px 20px;
  justify-content: space-between;
`;

const Title = styled(Link)`
  font-family: "Honk", system-ui;
  font-size: 40px;
  text-decoration: none;
`;

const ListWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const ListItem = styled.li`
  list-style-type: none;
  font-size: 20px;
  text-align: center;
  font-weight: 600;
`;

const MenuItemLink = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    color: #f5e718;
  }
`;
