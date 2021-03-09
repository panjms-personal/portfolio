import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from '../GlobalStyles';

export default function Technology() {
  return (
    <Container>
      <ContentContainer>
        <ContentItem>
          Technologies:
          <ul>
            <span style={{ fontWeight: 'bold' }}>Frontend</span>
            <li>React</li>
            <li>Redux</li>
            <li>styled-components</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
          <ul>
            <span style={{ fontWeight: 'bold' }}>Backend</span>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>NoSQL</li>
            <li>Firestore</li>
          </ul>
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
  padding: 3rem 0 3rem 0;
  background-color: rgb(36, 51, 74);
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
