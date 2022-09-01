import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Text404 = styled.h1`
  font-size: 20px;
`;

const NotFound = () => {

  return (
    <NotFoundContainer>
      <Text404>
        Error 404
      </Text404>
    </NotFoundContainer>
  );
}

export default NotFound;
