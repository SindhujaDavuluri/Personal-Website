import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Row, Col } from "react-bootstrap";

function Contact(props) {
  return (
    <ThemeProvider theme={props.theme}>
      <Wrapper props>
        <Heading>Reach out to me</Heading>
        <Row class="d-flex justify-content-around">
          <Paragraph>Email: sindhuja.d@outlook.com</Paragraph>
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

const Paragraph = styled.h4`
  color: ${(props) => props.theme.highlights};
  margin-bottom: 5%;
`;

export default Contact;
