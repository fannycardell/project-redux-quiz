import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterParagraph> Made by Fanny Cardell, Jessika Lind, Linnéa Ajger,
        Maria Westling and Thérèse Ånmark at Technigos bootcamp for Web developers 2022
      </FooterParagraph>
    </FooterWrapper>
  )
}

export default Footer;

export const FooterWrapper = styled.header`
display: flex;
  height: 20vh;
  background-color: #F26A3A;
  border: 15px dotted #A5D8C5;
  padding: 5px 40px 5px 20px;
  justify-content: flex-end;
  align-items: center;
  text-align: end;
  width: 100%;
`
export const FooterParagraph = styled.p`
  font-family: 'Quicksand', sans-serif;
  font-size: 10px;
  width: 70%;

  @media (min-width: 668px) and (max-width: 1024px) {
    font-size: 15px;
  }

  @media (min-width: 1025px) {
    font-size: 17px;
  }
`