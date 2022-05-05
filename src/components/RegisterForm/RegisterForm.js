import { useDispatch } from 'react-redux';

import { Form, Button } from 'react-bootstrap';
import { FormContainer, LinkToRegister, FormName } from './RegisterForm.styled';
import { register } from 'redux/auth-operations';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target.elements;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    dispatch(register({ name, email, password }));
  };

  return (
    <FormContainer fluid="sm">
      <FormName>Register</FormName>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
        <LinkToRegister to="/login">
          Already registered, then go to the login page!
        </LinkToRegister>
      </Form>
    </FormContainer>
  );
};

export default RegisterForm;
