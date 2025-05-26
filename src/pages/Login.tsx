import React from "react";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { COLORS, FONTS, BREAKPOINTS } from "../constants/style";
import predio from "../constants/assets/predio.svg";
import bg from "../constants/assets/login_bkg.svg";

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${COLORS.loginBG || '#333'}; 
  color: ${COLORS.white || '#FFF'}; 
  padding: 10px 40px; 
  border: none;
  border-radius: 8px; 
  font-size: 1rem;
  font-family: ${FONTS.primary};
  cursor: pointer;
  transition: background-color 0.3s ease;

  margin: 5% auto 0 auto; /* Centraliza horizontalmente */

  &:hover {
    background-color: ${COLORS.hoverLgn}; 
  }

  &:hover svg {
    transform: translateX(5px); 
  }
`;

const Container = styled.div`
  display: flex;
  width: 100vw;  // usa viewport width
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const SectionComFundo = styled.section`
  flex: 2;
  background-color: ${COLORS.loginBG};
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: left center;
  background-size: cover;
  position: relative;
  left: 0;
  margin-left: 0 !important;
  padding-left: 0 !important;
  z-index: 1; 

  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin: 0;
  padding: 0;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }
`;

const SectionBranca = styled.section`
  flex: 3;
  min-width: 350px; 
  background-color: white;
  height: 100%;
  border-top-left-radius: 2%;
  margin-top: -5%; 

  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: ${COLORS.secondary};
    font-family: ${FONTS.primary};
    margin-top: 30%;
    margin-left: -20%;
  }

  label {
    color: ${COLORS.secondary};
    font-family: ${FONTS.primary};
    font-weight: 600;
    font-size: 2.8vh;
  }

  input {
    width: 90%;
    padding: 10px;
    font-size: 1rem;
    border: 0;
    border-radius: 15px;
    margin-top: 2px;
    margin-bottom: 20px;
    box-sizing: border-box;
    font-family: ${FONTS.primary};
    background-color: ${COLORS.inputBg};
  }

  a {
  font-family: ${FONTS.primary}; 
  color: ${COLORS.black}; 
  margin-top: 7%; 
  &:hover {
    strong {
    color: blue;
    cursor: pointer;
  }
  }
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 60%;

  label {
    margin-left: -50%;
    lign-self: flex-start;
    margin-left: -90%; 
  }
`;

const Predio = styled.img`
  height: 70%;
  margin-right: -30%;

  animation: flutuar 3s ease-in-out infinite;

  @media (max-width: ${BREAKPOINTS.tablet}) {
    display: none;
  }

  transition: transform 0.3s ease-in-out;

  @keyframes flutuar {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-9px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;



const Login: React.FC<{ backgroundColor?: string }> = () => {
  //   const navigate = useNavigate();

  return (
    <Container>
      <SectionComFundo>
        <Predio src={predio} alt="Predio" />
      </SectionComFundo>

      <SectionBranca>
        <FormWrapper>
          <h2>Acesse a sua conta</h2>

          <label htmlFor="nome">Email</label>
          <input type="email" id="email" name="email" placeholder="Insira o seu e-mail aqui" />

          <label htmlFor="email">Senha</label>
          <input type="password" id="senha" name="senha" placeholder="Insira a sua senha aqui" />
           <Button>Fazer login</Button>
           <a>Não tem uma conta? Faça cadastro <strong>aqui.</strong></a>
        </FormWrapper>
      </SectionBranca>
    </Container>
  );
};

export default Login;
