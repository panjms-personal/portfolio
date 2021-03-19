import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

import Projects from './Projects';

export default function NavBar() {
  const [hamburgerDrop, setHamburgerDrop] = useState(false);

  return (
    <Container>
      <GlobalStyle />
      <NavItem style={{ justifyContent: 'flex-start', alignItems: 'center' }}>
        <FontAwesomeIcon
          icon={hamburgerDrop ? faTimes : faBars}
          onClick={function () {
            setHamburgerDrop(!hamburgerDrop);
          }}
          style={{ fontSize: '1.5rem' }}
        />
        <Dropdown
          className={hamburgerDrop ? 'dropdown-open' : 'dropdown-closed'}
        >
          <DropdownItem>
            {' '}
            <Link to="about" spy={true} smooth={true} duration={500}>
              About Me
            </Link>
          </DropdownItem>
          <DropdownItem>
            <Link to="tech" spy={true} smooth={true} duration={500}>
              Tech Stack
            </Link>
          </DropdownItem>
          <DropdownItem>
            {' '}
            <Link to="projects" spy={true} smooth={true} duration={500}>
              Projects
            </Link>
          </DropdownItem>
        </Dropdown>
      </NavItem>
      <NavItem></NavItem>
      <NavItem></NavItem>
    </Container>
  );
}

const Container = styled.nav`
  display: flex;

  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  box-shadow: 0 0.1rem 0.8rem 0 rgba(0, 0, 0, 0.19);
  z-index: 10;
  background-color: white;
`;

const NavItem = styled.div`
  display: flex;
  padding: 1rem;
  width: 33%;
  color: rgb(7, 35, 82);
`;

const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 10;
  top: 50px;
  background-color: rgba(0, 0, 0, 0.3);
  height: 100%;
  width: 100%;
  margin: 0;
  transition: 0.2s;

  @media only screen and (min-width: 673px) {
    padding-left: 2.5rem;
    width: 30%;
  }

  @media only screen and (min-width: 960px) {
    padding-left: 2.5rem;
    width: 30%;
  }

  @media only screen and (max-width: 673px) {
    align-items: center;
    padding-top: 40%;
  }
`;

const DropdownItem = styled.div`
  color: white;
  font-size: 1.5rem;
  padding-top: 0.5rem;
`;
