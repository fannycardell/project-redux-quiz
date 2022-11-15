import React from 'react';
import styled from 'styled-components/macro';

export const Header = () => {
  return (
    <HeaderWrapper>
      <h1>All about the 70s!</h1>
    </HeaderWrapper>
  );
};

// Styling of header

export const HeaderWrapper = styled.header`
  height: 20vh;
  min-height: 150px;
  padding-top: 3rem;
  background-color: #F26A3A;
  border: 10px dotted #A5D8C5;
  text-align: center;
  font-size: 0.8rem;

/* TABLET */
@media (min-width: 668px) and (max-width: 1024px) {
  padding-top: 2rem;
  height: 20vh;
  font-size: 1.4rem;

} 

/* DESKTOP */
@media (min-width: 1025px) {
  height: 20vh;
  padding-top: 1rem;
  background-color: #F26A3A;
  border: 10px dotted #A5D8C5;
  text-align: center;
  font-size: 2.2rem;

} 

`;

