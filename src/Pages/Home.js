import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import { Container, CardGroup, Card, CardImg, Button } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <div>
                <CarouselBox />
                <Container>
                    <h2 className='text-center m-4'>Our team</h2>
                    <CardGroup className="m-4">
                        <Card bg="warning">
                            <CardImg variant="top" src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Lorem ipsum dolor</Card.Text>
                                <Button variant="primary">About</Button>
                           </Card.Body>
                        </Card>
                        
                        <Card text="primary">
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Lorem ipsum dolor</Card.Text>
                                <Button variant="primary">About</Button>
                           </Card.Body>
                            <CardImg variant="bottom" src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                        </Card>

                        <Card bg="info">
                            <CardImg variant="top" src="https://images.pexels.com/photos/3274903/pexels-photo-3274903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text>Lorem ipsum dolor</Card.Text>
                                <Button variant="primary">About</Button>
                           </Card.Body>
                        </Card>

                    </CardGroup>
                </Container>
            </div>
        )
    }
}
