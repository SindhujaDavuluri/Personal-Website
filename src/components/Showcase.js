import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Row, Col } from "react-bootstrap";

function About(props) {
  return (
    <ThemeProvider theme={props.theme}>
      <Wrapper props>
        <Heading>Showcase</Heading>
        <Row>
          <ResCol
            xs={{ span: 12, order: 2 }}
            md={{ span: 6, order: 1 }}
            lg={{ span: 6, order: 1 }}
          >
            <img
              src={"https://via.placeholder.com/500/?text=Other Prof Projects"}
              alt="My Portrait"
            ></img>
          </ResCol>
          <ResCol
            xs={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
            lg={{ span: 6, order: 2 }}
          >
            <img
              src={"https://via.placeholder.com/500/?text=Personal Projects"}
              alt="My Portrait"
            ></img>
          </ResCol>
        </Row>
      </Wrapper>
    </ThemeProvider>
  );
}

const Wrapper = styled.section`
  padding: 2em;
  background: ${(props) => props.theme.main};
  height: 100vh;
`;

const Heading = styled.h1`
  color: ${(props) => props.theme.highlights};
`;

const ResCol = styled(Col)`
  margin: 0 0 2% 0;
  padding: 5%;
  color: ${(props) => props.theme.highlights};
`;

const NavButton = styled.button`
  border-radius: 3%;
  border: 0;
  height: 50px;
  width: auto;
  aspect-ratio: 1;
  margin: 5%;
  background: ${(props) => props.theme.highlights};

  &:hover {
    background: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.highlights};
  }
`;

export default About;
