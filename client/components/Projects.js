import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyles';

export default function Project() {
  return (
    <Container>
      <ContentContainer>
        <ProjectContainer>
          <ProjectImage src="https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg"></ProjectImage>
          <ProjectBody>
            <ProjectHeader>Don't Skip Leg Day (DSLD)</ProjectHeader>
            <ProjectDescription>
              DSLD is a fitness companion.
            </ProjectDescription>
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
  justify-content: center;
  width: 80%;
`;

const ProjectBody = styled.div``;
const ProjectImage = styled.img``;
const ProjectHeader = styled.h1``;
const ProjectDescription = styled.div``;
