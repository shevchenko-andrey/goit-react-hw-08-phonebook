import { Form, Button } from 'react-bootstrap';
import { FormContainer, LinkToRegister, FormName } from './LoginForm.styled';
const LoginForm = () => {
  return (
    <FormContainer fluid="sm">
      <FormName>Login</FormName>
      <Form
        onSubmit={e => {
          e.preventDefault();
          const form = e.target.elements;
          const email = form.email.value;
          const password = form.password.value;
          console.log({ email, password });
        }}
      >
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
        <LinkToRegister to="/register">
          Not registered yet, then register now!
        </LinkToRegister>
      </Form>
    </FormContainer>
  );
};

export default LoginForm;
