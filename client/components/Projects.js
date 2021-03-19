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
          <ProjectBody>
            <ProjectHeader>Don't Skip Leg Day (DSLD)</ProjectHeader>
            <ProjectDescription>
              A workout companion that tracks a user's squat form through
              computer vision, providing coaching through real-time feedback.
              DSLD powers its visuals with{' '}
              <ProjectLink
                style={{
                  padding: '0 0.3rem',
                  margin: '0',
                  textDecoration: 'underline',
                }}
                href="https://github.com/tensorflow/tfjs-models/tree/master/posenet"
              >
                PoseNet.js
              </ProjectLink>{' '}
              , tracking and displaying a user's body throughout an exercise.
              The front end was built with React.js and stylized-components,
              with a light-weight back end leveraging Firestore's NoSQL cloud
              databasee. Additionally, it was built as a progressive web
              application to provide compatibility for a wide range of devices,
              desktop or mobile.
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
          <ProjectImage src={DSLDPhoto}></ProjectImage>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectBody>
            <ProjectHeader>Stackafour</ProjectHeader>
            <ProjectDescription>
              Stackafour is a webapp implementation of Connect4, built with
              D3.js and custom game logic. Developed during a weekend hackathon,
              it combines algorithms with the rendering and styling capabilities
              of D3 to create a dynamic game board.
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
          <ProjectImage src={StackafourPhoto}></ProjectImage>
        </ProjectContainer>
        <ProjectContainer>
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
          <ProjectImage src={P2PPhoto}></ProjectImage>
        </ProjectContainer>
        <ProjectContainer>
          <ProjectBody>
            <ProjectHeader>Jelly Beans and Shoes (JBS)</ProjectHeader>
            <ProjectDescription>
              A mock e-commerce website selling various electronic devices. JBS
              was a group project exploring all aspects of a deployed full stack
              web application. The backend for our e-commerce site was handled
              with PostgreSQL and local storage.
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
          <ProjectImage src={JBSPhoto}></ProjectImage>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem 0 2rem 0;
  width: 80%;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgb(36, 51, 74);

  @media only screen and (min-width: 867px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;
const ProjectImage = styled.img`
  width: 75%;
  margin-top: 1.5rem;
  @media only screen and (min-width: 867px) {
    width: 45%;
    margin-top: 0;
  }
`;

const ProjectBody = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 867px) {
    width: 55%;
    align-items: flex-start;
    padding-right: 2rem;
  }
`;
const ProjectHeader = styled.h1`
  margin-top: 0;
`;
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
  margin: 0 0.5rem 0 0.5rem;
  text-decoration: none;

  &:hover {
    background-color: rgb(36, 51, 74);
    color: white;
    border-radius: 5px;
  }

  &:visited {
    color: white;
  }
`;
