import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  text-align: center; 
  font-family: "Playfair Display", serif; 
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Header = () => {

  return (
    <HeaderContainer>
      <Title>
        Rick & Morty
      </Title>
    </HeaderContainer>
  );
}

export default Header;
