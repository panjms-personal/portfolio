import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import GlobalStyle from '../GlobalStyles';

import DSLDPhoto from 'url:~/public/images/DSLDMock.png';
import StackafourPhoto from 'url:~/public/images/StackafourMock.png';
import P2PPhoto from 'url:~/public/images/P2PMock.png';
import JBSPhoto from 'url:~/public/images/JBSMock.png';

export default function Project() {
  return (
    <Container>
      <ContentContainer>
        <ProjectContainer>
          <ProjectImage src={DSLDPhoto}></ProjectImage>
          <ProjectBody>
            <ProjectHeader>Don't Skip Leg Day (DSLD)</ProjectHeader>
            <ProjectDescription>
              DSLD is a fitness companion.
            </ProjectDescription>
            <ProjectLinks>
              <ProjectLink href="https://dsld-6914b.web.app/">
                Visit
              </ProjectLink>
              <ProjectLink href="https://github.com/2011-FSA-CRAB/DSLD">
                Github {'   '}
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ fontSize: '1.5rem' }}
                />
              </ProjectLink>
            </ProjectLinks>
          </ProjectBody>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectImage src={StackafourPhoto}></ProjectImage>
          <ProjectBody>
            <ProjectHeader>Stackafour</ProjectHeader>
            <ProjectDescription>
              Stackafour is a webapp implementation of Connect4, built with
              D3.js and custom game logic.
            </ProjectDescription>
            <ProjectLinks>
              <ProjectLink href="http://stackafour.herokuapp.com/">
                Visit
              </ProjectLink>
              <ProjectLink href="https://github.com/panjms/d3c4">
                Github {'   '}
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ fontSize: '1.5rem' }}
                />
              </ProjectLink>
            </ProjectLinks>
          </ProjectBody>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectImage src={P2PPhoto}></ProjectImage>
          <ProjectBody>
            <ProjectHeader>Pan to Pan (P2P)</ProjectHeader>
            <ProjectDescription>
              P2P is a food blog I coded while learning basic web development on
              my own. It is coded with basic HTML/CSS/JavaScript and houses
              pictures of food that I either made myself or enjoyed while
              traveling!
            </ProjectDescription>
            <ProjectLinks>
              <ProjectLink href="https://panjms.github.io">Visit</ProjectLink>
              <ProjectLink href="https://github.com/panjms/panjms.github.io">
                Github {'   '}
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ fontSize: '1.5rem' }}
                />
              </ProjectLink>
            </ProjectLinks>
          </ProjectBody>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectImage src={JBSPhoto}></ProjectImage>
          <ProjectBody>
            <ProjectHeader>Jelly Beans and Shoes (JBS)</ProjectHeader>
            <ProjectDescription>
              JBS is a mock e-commerce website selling various electronic
              devices.
            </ProjectDescription>
            <ProjectLinks>
              <ProjectLink href="http://jellybeansandshoes.herokuapp.com/">
                Visit
              </ProjectLink>
              <ProjectLink href="https://github.com/2011-FSA-GS-OMEGA/GraceShopper">
                Github {'   '}
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ fontSize: '1.5rem' }}
                />
              </ProjectLink>
            </ProjectLinks>
          </ProjectBody>
        </ProjectContainer>
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
  padding: 3rem 0 3rem 0;
  background-color: white;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0 2rem 0;
  width: 80%;
`;
const ProjectImage = styled.img`
  width: 40%;
`;

const ProjectBody = styled.div`
  width: 55%;
`;
const ProjectHeader = styled.h1``;
const ProjectDescription = styled.div``;

const ProjectLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
`;

const ProjectLink = styled.a`
  padding: 0.5rem 1rem 0.5rem 1rem;
  color: rgb(36, 51, 74);
  color: #453886;
  margin: 0 0.5rem 0 0.5rem;
  text-decoration: none;

  :hover {
    background-color: rgb(36, 51, 74);
    color: white;
    border-radius: 5px;
  }
`;
