import React, { useState, useEffect } from 'react';
import { useSpring, animated, interpolate } from 'react-spring';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

import { debounce } from '../debouce';

export default function Intro() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', debounce(handleScroll));
    console.log(scrollY);
  }, [debounce]);

  const [{ springscrollY }, springsetScrollY] = useSpring(() => ({
    springscrollY: 0,
  }));

  const parallaxlevel = 20;
  springsetScrollY({ springscrollY: scrollY });

  const interpHeader = springscrollY.interpolate(
    (o) => `translateY(${o / parallaxlevel}px)`
  );

  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1596683720379-b11030608876?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80');
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
