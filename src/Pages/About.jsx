import React from 'react';
import {
  Container, Tab, Row, Col,
} from 'react-bootstrap';
import NavItems from '../Components/NavItems';
import TabContents from '../Components/TabContents';

const About = () => (
  <Container>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <NavItems />
        </Col>
        <Col sm={9}>
          <TabContents />
        </Col>
      </Row>
    </Tab.Container>
  </Container>
);

export default About;
