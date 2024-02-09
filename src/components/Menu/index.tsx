import styled from "styled-components";

const MenuDiv = styled.nav`
    display: flex;
    align-items: center;
    background: white;
    height: 50px;
    padding: 10px 20px;
    justify-content: space-between;
  `;

  const Title = styled.p`
    font-family: "Honk", system-ui;
    font-size: 40px;
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

function Menu() {
  return (
    <MenuDiv>
      <Title>Rick And Morty</Title>
      <ul>
        <ListItem>
          <MenuItemLink href="#">Docs</MenuItemLink>
        </ListItem>
      </ul>
    </MenuDiv>
  );
}

export default Menu;
