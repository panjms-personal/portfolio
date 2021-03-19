import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyles';

import { Parallax } from 'react-scroll-parallax';

export default function Technology() {
  return (
    <Parallax>
      <Parallax x={[-25, 0]}>
        <Container id="tech">
          <ContentHeader>Technologies</ContentHeader>
          <ContentContainer>
            <ContentItem>
              <ItemHeader>Front end</ItemHeader>
              <TechList>
                <TechItem>React/React Hooks</TechItem>
                <TechItem>Redux</TechItem>
                <TechItem>styled-components</TechItem>
                <TechItem>HTML5</TechItem>
                <TechItem>CSS3</TechItem>
              </TechList>
            </ContentItem>
            <ContentItem>
              <ItemHeader>Back end</ItemHeader>
              <TechList>
                <TechItem>Express</TechItem>
                <TechItem>PostgreSQL</TechItem>
                <TechItem>NoSQL</TechItem>
                <TechItem>Firestore</TechItem>
              </TechList>
            </ContentItem>
          </ContentContainer>
        </Container>
      </Parallax>
    </Parallax>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 3rem 0 3rem 0;
  background-color: rgb(36, 51, 74);
  background-size: cover;
  box-shadow: 0 -0.5rem 3rem 0 rgba(0, 0, 0, 0.19);
`;

const ContentHeader = styled.h1`
  color: white;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 850px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ContentItem = styled.div`
  color: white;
  width: 50%;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemHeader = styled.h2``;
const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const TechItem = styled.div`
  margin: 0.4rem 0.4rem;
  border-bottom: 1px solid white;
  border-top: 1px solid white;
  background-color: none;
  box-shadow: 5px 5px 2px 1px rgba(141, 153, 174, 0.25);
`;
