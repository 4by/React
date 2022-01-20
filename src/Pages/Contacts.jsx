import {
  Button, Container, Form, FormGroup, FormLabel, FormText, FormControl, FormCheck,
} from 'react-bootstrap';

const Contacts = () => (
  <Container style={{ width: '500px' }}>
    <h1 className="text-center">Contact Us</h1>
    <Form>
      <FormGroup controlId="forBasicEmail">
        <FormLabel>Email address</FormLabel>
        <FormControl type="email" placeholder="Enter email" />
        <FormText>We will never share your email with anyone else</FormText>
      </FormGroup>

      <FormGroup controlId="formBasicPassword">
        <FormLabel>Example text area</FormLabel>
        <FormControl as="textarea" rows="3" />
      </FormGroup>

      <FormGroup controlId="formBasicCheckbox">
        <FormCheck type="checkbox" label="check me out" />
      </FormGroup>

      <Button variant="primary" type="submit">Submit</Button>

    </Form>
  </Container>
);

export default Contacts;
