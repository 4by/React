import React, { Component } from 'react'
import { Container, Nav, Tab, Row, Col } from 'react-bootstrap'



export default class About extends Component {
    render() {
        return (
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
                                        src="https://images.pexels.com/photos/8104729/pexels-photo-8104729.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    className='img-fluid'
                                    />
                                    <p>Loren ipsum dolor</p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second">
                                    <img src="https://images.pexels.com/photos/6128322/pexels-photo-6128322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                                    className='img-fluid'
                                    />
                                    <p>Loren ipsum dolor</p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="third">
                                    <img src="https://images.pexels.com/photos/2967853/pexels-photo-2967853.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                                    className='img-fluid'
                                    />
                                    <p>Loren ipsum dolor</p>
                                </Tab.Pane>

                                <Tab.Pane eventKey="fourth">
                                    <img src="https://images.pexels.com/photos/8567137/pexels-photo-8567137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                                    className='img-fluid'
                                    />
                                    <p>Loren ipsum dolor</p>
                                </Tab.Pane>


                                <Tab.Pane eventKey="fifth">
                                    <img src="https://images.pexels.com/photos/10457996/pexels-photo-10457996.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                                    className='img-fluid'
                                    />
                                    <p>Loren ipsum dolor</p>
                                </Tab.Pane>



                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
