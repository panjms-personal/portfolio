import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyles';

export default function Intro() {
  return (
    <Container>
      <ContentContainer>
        <ContentItem>
          Hello! My name is James and I am a full-stack software engineer based
          in New York City.
        </ContentItem>
        <br></br>
        <ContentItem>
          I began my career as an elementary school teacher in the South Bronx.
          After looking for a more technical position, I became a Credit Risk
          Analyst where I found my passion for coding during one of projects.
        </ContentItem>
        <br></br>
        <ContentItem>
          Most recently, I graduated from Fullstack Academy, a 17-week long
          immersive coding bootcamp, where I learned the core components for
          full stack JavaScript web development through pair programming and
          team projects.
        </ContentItem>
        <br></br>
        <ContentItem>
          I am passionate about both building & problem-solving and am looking
          to extend this passion as a full time software engineer.
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
  padding: 10rem 0 10rem 0;
`;

const ContentContainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentItem = styled.div`
  color: rgb(7, 35, 82);
`;
