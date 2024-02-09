import styled from "styled-components";

const FooterDiv = styled.footer`
display: flex;
align-items: center;
justify-content: center;
color: white;
background: rgb(32, 35, 41);
height: 50px;
`;

const FooterItem = styled.span`
font-weight: 700;
`


function Footer() {
  return (
    <FooterDiv>
      <FooterItem>otarampinelli - 2024</FooterItem>
    </FooterDiv>
  );
}

export default Footer;
