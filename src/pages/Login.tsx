import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { COLORS, FONTS, BREAKPOINTS } from "../constants/style"; 
import predio from "../constants/assets/predio.svg"
import bg from "../constants/assets/login_bkg.svg"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const SectionComFundo = styled.section`
  background-color: ${COLORS.loginBG};
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: left center;
  background-size: cover;

  position: fixed;
  top: 0;
  left: 0;

  width: 40%;
  height: 100vh;
  margin: 0;
  padding: 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;

@media (max-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }
`;

const SectionBranca = styled.section`
  margin-left: 40%;
  width: 60%;
  height: 100%;
  background-color: white;
  border-top-left-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }

  h2 {
    color: ${COLORS.secondary};
    font-family: ${FONTS.primary};
    margin-top: 30%;
    margin-left: 40%;
  }

  a {
    color: ${COLORS.secondary}; 
    font-family: ${FONTS.primary};
  }
`;

const Predio = styled.img`
  height: 50%;
  margin-right: -30%; 
  cursor: pointer;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: translateY(-5px);
  }
`

const Login: React.FC<{ backgroundColor?: string }> = () => {
//   const navigate = useNavigate();

  return (
    <Container>
        <SectionComFundo>
            <Predio src={predio} alt="Predio" />
        </SectionComFundo>
        <SectionBranca>
            <h2>Acesse a sua conta</h2>
            <a>E-mail</a>
        </SectionBranca>
    </Container>
    
  );
};

export default Login;

