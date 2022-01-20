import {
  Container, Nav, Tab, Row, Col,
} from 'react-bootstrap';
import Img1 from '../assets/img1.jpeg';
import Img2 from '../assets/img2.jpeg';
import Img3 from '../assets/img3.jpeg';
import Img4 from '../assets/img4.jpeg';
import Img5 from '../assets/img5.jpeg';

const About = () => (
  <Container>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column mt-2">
            <Nav.Item>
              <Nav.Link eventKey="first">Design</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="second">Team</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="third">Programming</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="fifth">Libraries</Nav.Link>
            </Nav.Item>

          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content className="mt-3">

            <Tab.Pane eventKey="first">
              <img
                src={Img1}
                className="img-fluid"
              />
              <p>Loren ipsum dolor</p>
            </Tab.Pane>

            <Tab.Pane eventKey="second">
              <img
                src={Img2}
                className="img-fluid"
              />
              <p>Loren ipsum dolor</p>
            </Tab.Pane>

            <Tab.Pane eventKey="third">
              <img
                src={Img3}
                className="img-fluid"
              />
              <p>Loren ipsum dolor</p>
            </Tab.Pane>

            <Tab.Pane eventKey="fourth">
              <img
                src={Img4}
                className="img-fluid"
              />
              <p>Loren ipsum dolor</p>
            </Tab.Pane>

            <Tab.Pane eventKey="fifth">
              <img
                src={Img5}
                className="img-fluid"
              />
              <p>Loren ipsum dolor</p>
            </Tab.Pane>

          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  </Container>
);

export default About;
