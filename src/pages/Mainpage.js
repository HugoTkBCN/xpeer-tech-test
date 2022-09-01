import styled from "styled-components";
import CharactersList from '../components/CharactersList';

const MainPageWrapper = styled.div`
  width: 100%;
  height: 75%;
  display: flex;
`;

const MainPage = () => {

  return (
    <MainPageWrapper>
      <CharactersList />
    </MainPageWrapper>
  );
}

export default MainPage;
