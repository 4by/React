import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import Post from '../Components/Post';
import { CardGroup2 } from '../Components/CardGroups';

const Blog = () => (
  <Container>
    <Row>

      <Col md="9">
        <Post num="1" />
        <Post num="2" />
        <Post num="3" />
        <Post num="4" />
      </Col>

      <Col md="3">
        <h5 className="text-center mt-5">Categories</h5>
        <CardGroup2 />
      </Col>

    </Row>
  </Container>
);

export default Blog;
