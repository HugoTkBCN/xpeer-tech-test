import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-areas: "image" "text";
  grid-template-rows: 65% 35%;
  width: 17%;
  height: 40vh;
  border-radius: 18px;
  background: black;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
  text-align: center;
  margin: 1%;

  @media only screen and (max-width: 1350px) {
    width: 20%;
  }

  @media only screen and (max-width: 1150px) {
    width: 25%;
  }

  @media only screen and (max-width: 900px) {
    width: 30%;
  }

  @media only screen and (max-width: 750px) {
    width: 45%;
  }

  @media only screen and (max-width: 550px) {
    width: 60%;
  }
`;

export const CardImage = styled.div`
  grid-area: image;
  background-image: url(${({ background }) => background});
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-size: cover;
`;

export const CardTextWrapper = styled.div`
  grid-area: text;
  display: flex;
  flex-direction: column;
  margin-top: 0;
`;

export const CardText = styled.span`
  color: white;
  font-size: 14px;
`;

export const CardTextTitle = styled.h2`
  font-size: 24px;
  color: red;
`;

const Card = ({ item }) => {
  const navigate = useNavigate();

  return (
    <CardWrapper onClick={() => navigate("/character/" + item.id)}>
      <CardImage background={item.image} />
      <CardTextWrapper>
        <CardTextTitle>{item.name}</CardTextTitle>
        <CardText>{item.status}</CardText>
        <CardText>{item.origin.name}</CardText>
      </CardTextWrapper>
    </CardWrapper>
  );
}

export default Card;
