import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Row, Col } from "react-bootstrap";

function Work(props) {
  return (
    <ThemeProvider theme={props.theme}>
      <Wrapper props>
        <Heading>What I do</Heading>
        <Row class="d-flex justify-content-around">
          <ResCol>
            {" "}
            <img
              src={"https://via.placeholder.com/300/"}
              alt="My Portrait"
            ></img>
          </ResCol>
          <ResCol>
            {" "}
            <img
              src={"https://via.placeholder.com/300/"}
              alt="My Portrait"
            ></img>
          </ResCol>
          <ResCol>
            {" "}
            <img
              src={"https://via.placeholder.com/300/"}
              alt="My Portrait"
            ></img>
          </ResCol>
        </Row>
        <Row class="d-flex justify-content-around">
          <ResCol>
            {" "}
            <img
              src={"https://via.placeholder.com/300/"}
              alt="My Portrait"
            ></img>
          </ResCol>
          <ResCol>
            {" "}
            <img
              src={"https://via.placeholder.com/300/"}
              alt="My Portrait"
            ></img>
          </ResCol>
          <ResCol>
            {" "}
            <img
              src={"https://via.placeholder.com/300/"}
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
  height: auto;
`;

const ResCol = styled(Col)`
  margin: 0 0 2% 0;
  color: ${(props) => props.theme.highlights};
`;

const Heading = styled.h1`
  color: ${(props) => props.theme.highlights};
  margin-bottom: 5%;
`;

export default Work;
