  import React from 'react';
  import { useState } from 'react';
  import styled from 'styled-components';
  import { COLORS, FONTS, BREAKPOINTS  } from '../constants/style';
  import logo from '../constants/assets/logo.svg';
//   import home from '../constants/assets/icon_home.svg'
  import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

  const HeaderContainer = styled.header<{ backgroundColor: string; top?: string; left?: string }>`
    background-color: COLORS.primary};
    padding: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    z-index: 20;
    top: ${(props) => props.top || '0'};
    left: ${(props) => props.left || '0'};
    width: 100%;
    box-sizing: border-box;
  `;


  const Logo = styled.img`
    height: 10px;
    margin-right: 10%;

    @media (max-width: ${BREAKPOINTS.mobile}) {
      height: 5vh;
    }
  `;

  const Home = styled.img`
    height: 40px;

    @media (max-width: ${BREAKPOINTS.mobile}) {
      display: none; 
    }
  `;

  const Nav = styled.nav`
    display: flex;
    gap: 20px;

    a {
      color: ${COLORS.white};
      font-family: ${FONTS.primary};
      text-decoration: none;
      font-weight: 600;
      &:hover {
        color: ${COLORS.primary};
        font-weight: bold;
      }
    }

      @media (max-width: ${BREAKPOINTS.mobile}) {
      display: none; /* Oculta a navbar padrão em dispositivos móveis */
    }
  `;

  const MobileMenu = styled.nav<{ isOpen: boolean }>`
    display: none;

    @media (max-width: ${BREAKPOINTS.mobile}) {
      display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
      flex-direction: column;
      position: absolute;
      top: 80px;
      right: 0;
      background-color: ${COLORS.primary};
      width: 100%;
      padding: 20px;
      gap: 15px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      z-index: 100;
    }

    a {
      color: ${COLORS.white};
      font-family: ${FONTS.primary};
      text-decoration: none;
      text-align: center;
      font-weight: 600;
      &:hover {
        color: ${COLORS.primary};
        font-weight: bold;
      }
    }
  `;

  const HamburgerIcon = styled.div`
    display: none; /* Oculta o ícone hambúrguer por padrão */
    cursor: pointer;
    position: absolute; /* Fixa o menu no lugar, mesmo quando a página é rolada */
    top: 20px; /* Ajusta a posição do menu na parte superior da tela */
    right: 20px; /* Posiciona o menu no lado direito da tela */
    z-index: 1000; /* Garante que o menu esteja acima de outros elementos */
    color: white;

    @media (max-width: ${BREAKPOINTS.tablet}) {
      display: block; 
      margin-right: 0 auto;
    }
  `;

  const Header: React.FC<{ backgroundColor?: string }> = ({ backgroundColor = COLORS.header }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (
      <HeaderContainer backgroundColor={backgroundColor}>
        <Logo src={logo} alt="Originei Logo" />
        <Nav>
        </Nav>
        <HamburgerIcon onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </HamburgerIcon>
        <MobileMenu isOpen={isOpen}>
        </MobileMenu>
      </HeaderContainer>
    );
  };

  export default Header;
