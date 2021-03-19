import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

import { Parallax } from 'react-scroll-parallax';

import backgroundImg from 'url:../../public/images/photo-1596683720379-b11030608876.jpeg';

export default function Intro() {
  return (
    <Parallax>
      <Container>
        <Parallax y={[-100, 100]}>
          <ContentContainer>
            <ContentItem style={{ fontSize: '4rem' }}>JAMES PAN</ContentItem>
            <ContentItem style={{ fontSize: '1.8rem' }}>
              SOFTWARE ENGINEER
            </ContentItem>
            <ContentItem style={{ marginTop: '1rem' }}>
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
            </ContentItem>
          </ContentContainer>
        </Parallax>
      </Container>
    </Parallax>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImg});
  background-size: cover;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentItem = styled.div`
  color: white;
`;

const SocialsLink = styled.a`
  text-decoration: none;
  color: white;
  padding: 0 0.2rem 0 0.2rem;
`;
