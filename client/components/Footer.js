import { faAlignRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <Container>
      <FooterItem></FooterItem>
      <FooterItem style={{ justifyContent: 'center' }}>
        <Content>
          <SocialsLink href="https://www.linkedin.com/in/james--pan/">
            <FontAwesomeIcon
              icon={faLinkedin}
              onClick={function () {}}
              style={{ fontSize: '1.5rem' }}
            />
          </SocialsLink>
          <SocialsLink href="https://github.com/panjms">
            <FontAwesomeIcon
              icon={faGithub}
              onClick={function () {}}
              style={{ fontSize: '1.5rem' }}
            />
          </SocialsLink>
          <SocialsLink href="mailto:panjms@gmail.com?subject=Hello!">
            <FontAwesomeIcon
              icon={faEnvelopeSquare}
              onClick={function () {}}
              style={{ fontSize: '1.5rem' }}
            />
          </SocialsLink>
        </Content>
      </FooterItem>
      <FooterItem
        style={{
          justifyContent: 'flex-end',
        }}
      >
        <Content>James Pan</Content>
      </FooterItem>
    </Container>
  );
}

const Container = styled.footer`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 -0.5rem 3rem 0 rgba(0, 0, 0, 0.19);
  z-index: 10;
  background-color: rgb(36, 51, 74);
`;

const FooterItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 31%;
  color: white;
`;

const Content = styled.div`
  display: 'flex';
  flex-direction: 'row';
  margin: 0 0.8rem 0 0.8rem;
`;
const SocialsLink = styled.a`
  text-decoration: none;
  color: white;
  padding: 0.7rem 0.2rem 0 0.2rem;
`;
