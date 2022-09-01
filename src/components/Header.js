import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderWrapper = styled.div`
  width: 100%;
  height: 25%;
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
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <Title onClick={() => navigate("/")}>
        Rick & Morty
      </Title>
    </HeaderWrapper>
  );
}

export default Header;
