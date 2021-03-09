import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyles';

export default function Footer() {
  return (
    <Container>
      <FooterItem>TEST</FooterItem>
    </Container>
  );
}

const Container = styled.footer`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  box-shadow: 0 -0.5rem 3rem 0 rgba(0, 0, 0, 0.19);
  z-index: 10;
  background-color: rgb(36, 51, 74);
`;

const FooterItem = styled.div`
  display: flex;
  padding: 1rem;
  width: 33%;
  color: white;
`;
