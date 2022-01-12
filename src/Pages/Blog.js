import React, { Component } from 'react'
import { Container, Row, Col, Media, Card, ListGroup } from 'react-bootstrap'
import CarouselBox from '../Components/CarouselBox'

export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">

                        <div className="m-5 d-flex align-items-center">
                            <div className="flex-shrink-0">
                                <img
                                    width={150}
                                    width={150}
                                    className='mr-3'
                                    src='https://avatars.mds.yandex.net/get-zen_doc/3413519/pub_5ff887b2fe4e686f6ae6ba3f_5ff887d7f906b16872a69755/scale_1200'
                                />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5>Blog post</h5>
                                <p> lorem ipsum dolor </p>
                            </div>
                        </div>

                        <div className="m-5 d-flex align-items-center">
                            <div className="flex-shrink-0">
                                <img
                                    width={150}
                                    width={150}
                                    className='mr-3'
                                    src='https://avatars.mds.yandex.net/get-zen_doc/3413519/pub_5ff887b2fe4e686f6ae6ba3f_5ff887d7f906b16872a69755/scale_1200'
                                />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5>Blog post</h5>
                                <p> lorem ipsum dolor </p>
                            </div>
                        </div>

                        <div className="m-5 d-flex align-items-center">
                            <div className="flex-shrink-0">
                                <img
                                    width={150}
                                    width={150}
                                    className='mr-3'
                                    src='https://avatars.mds.yandex.net/get-zen_doc/3413519/pub_5ff887b2fe4e686f6ae6ba3f_5ff887d7f906b16872a69755/scale_1200'
                                />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5>Blog post</h5>
                                <p> lorem ipsum dolor </p>
                            </div>
                        </div>

                        <div className="m-5 d-flex align-items-center">
                            <div className="flex-shrink-0">
                                <img
                                    width={150}
                                    width={150}
                                    className='mr-3'
                                    src='https://avatars.mds.yandex.net/get-zen_doc/3413519/pub_5ff887b2fe4e686f6ae6ba3f_5ff887d7f906b16872a69755/scale_1200'
                                />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h5>Blog post</h5>
                                <p> lorem ipsum dolor </p>
                            </div>
                        </div>

                    </Col>

                    <Col md="3">
                        <h5 className='text-center mt-5'>Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html/CSS</ListGroup.Item>
                                <ListGroup.Item>Js</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </ListGroup>
                        </Card>
                        
                        <Card className="mt-3" bg="light">
                           <Card.Body>
                               <Card.Title>Side widget</Card.Title>
                               <Card.Text>Lorem ipsu dorem</Card.Text>
                           </Card.Body>
                        </Card>

                    </Col>

                </Row>
            </Container>
        )
    }
}
