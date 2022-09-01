import styled from "styled-components";
import Card from './Card';
import { useState, useEffect } from 'react';

const CharactersListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  
`;

const CharactersList = () => {
  const characters = JSON.parse(localStorage.getItem("charactersList"));
  const [charactersToList, setCharactersToList] = useState(20);

  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && charactersToList < characters.length)
      setCharactersToList(charactersToList + 20);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [charactersToList]);

  return (
    <CharactersListWrapper>
      {characters.slice(0, charactersToList).map((character, index) => {
        return (
          <Card key={index} item={character} />
        );
      })}
    </CharactersListWrapper>

  );
}

export default CharactersList;
