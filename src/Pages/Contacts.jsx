import React from 'react';

import { Button, Container } from 'react-bootstrap';
import FormAreas from '../Components/FormAreas';

const Contacts = () => (
  <Container style={{ width: '500px' }}>
    <h1 className="text-center">Contact Us</h1>
    <FormAreas />
    <Button variant="primary" type="submit">Submit</Button>
  </Container>
);

export default Contacts;
