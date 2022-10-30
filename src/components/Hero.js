import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Row, Col } from "react-bootstrap";

function Hero(props) {
  return (
    <ThemeProvider theme={props.theme}>
      <Wrapper props>
        <Heading>Sindhuja Davuluri</Heading>
        <Row>
          <ResCol
            xs={{ span: 12, order: 2 }}
            md={{ span: 6, order: 1 }}
            lg={{ span: 6, order: 1 }}
          >
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
            <Row className="d-flex justify-content-center mt-5">
              <NavButton>1</NavButton>
              <NavButton>2</NavButton>
              <NavButton>3</NavButton>
            </Row>
          </ResCol>
          <ResCol
            xs={{ span: 12, order: 1 }}
            md={{ span: 6, order: 2 }}
            lg={{ span: 6, order: 2 }}
          >
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
  padding: 8em;
  background: ${(props) => props.theme.main};
  height: 100vh;
`;

const ResCol = styled(Col)`
  margin: 0 0 2% 0;
  padding: 5%;
  color: ${(props) => props.theme.highlights};
`;

const NavButton = styled.button`
  border-radius: 50%;
  height: 50px;
  width: 50px;
  aspect-ratio: 1;
  margin-right: 5%;
  background: ${(props) => props.theme.highlights};

  &:hover {
    background: ${(props) => props.theme.secondary};
    color: ${(props) => props.theme.highlights};
  }
`;

const Heading = styled.h1`
  color: ${(props) => props.theme.highlights};
`;

export default Hero;
