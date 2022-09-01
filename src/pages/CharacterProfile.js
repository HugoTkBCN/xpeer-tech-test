import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CharacterProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfilePicture = styled.img`
  width: 20%;
  height: auto;
  border-radius: 25px;
`;

const Name = styled.h2`
  font-size: 40px
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextDescription = styled.p`
  font-size: 24px;
`;

const CharacterProfile = () => {
  let { id } = useParams();
  const characters = JSON.parse(localStorage.getItem("charactersList"));
  const [character, setCharacter] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (characters[id - 1]) {
      console.log(characters[id - 1]);
      setCharacter(characters[id - 1]);
    } else {
      navigate("/404")
    }
  }, [])

  return (
    <div>
      {character &&
        <CharacterProfileWrapper>
          <Name>{character.name}</Name>
          <ProfilePicture src={character.image} />
          <DescriptionWrapper>
            <TextDescription>Status: {character.status}</TextDescription>
            <TextDescription>Origin: {character.origin.name}</TextDescription>
            <TextDescription>Gender: {character.gender}</TextDescription>
            <TextDescription>Location: {character.location.name}</TextDescription>
          </DescriptionWrapper>
        </CharacterProfileWrapper>
      }
    </div>
  );
}

export default CharacterProfile;
