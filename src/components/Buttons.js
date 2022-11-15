import React from 'react';
import styled from 'styled-components/macro';

export const Button = ({ buttonText, handleClick }) => {
  return (
    <ButtonStyling type="button" onClick={handleClick}>{buttonText}</ButtonStyling>
  )
};

export const ButtonStyling = styled.button`
  background-color: #A5D8C5;
  padding: 11px;
  border-radius: 15px;
  border: 2px solid #F19A66;
  font-family: 'Quicksand', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: black;

  &:hover {
    opacity: 0.8;
  }

@media (min-width: 668px) and (max-width: 1024px) {
  font-size: 18px;
}
@media (min-width: 1025px) {
  font-size: 20px;
}

`