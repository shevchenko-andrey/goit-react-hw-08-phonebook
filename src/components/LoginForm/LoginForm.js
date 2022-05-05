import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { FormContainer, LinkToRegister, FormName } from './LoginForm.styled';
import { logIn } from 'redux/auth-operations';
const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    dispatch(logIn({ email, password }));
    form.reset();
  };
  return (
    <FormContainer fluid="sm">
      <FormName>Login</FormName>
      <Form onSubmit={handleSubmit}>
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
