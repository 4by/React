import Carousel from 'react-bootstrap/Carousel';
import forestImg from '../assets/forest.jpg';
import dforestImg from '../assets/dforest.jpg';

function CarouselBox() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="img-fluid"
          src={forestImg}
          alt="Forest"
        />
        <Carousel.Caption>
          <h3>Forest Image</h3>
          <p>Lorem ipsum dolor</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="img-fluid"
          src={dforestImg}
          alt="Dark Forest"
        />
        <Carousel.Caption>
          <h3>Dark Forest Image</h3>
          <p>Lorem ipsum dolor</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselBox;
