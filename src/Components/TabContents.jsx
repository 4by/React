import React from 'react';
import { Tab } from 'react-bootstrap';
import Img1 from '../assets/img1.jpg';
import Img2 from '../assets/img2.jpg';
import Img3 from '../assets/img3.jpg';
import Img4 from '../assets/img4.jpg';
import Img5 from '../assets/img5.jpg';

const TabContents = () => (

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

);

export default TabContents;
