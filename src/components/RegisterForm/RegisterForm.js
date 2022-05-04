import { Form, Button } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';
import { FormContainer, LinkToRegister, FormName } from './RegisterForm.styled';
const RegisterLoginForm = ({ forLogin }) => {
  return (
    <FormContainer fluid="sm">
      <FormName>{forLogin ? 'Login' : 'Register'}</FormName>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
        <LinkToRegister to={forLogin ? '/register' : '/login'}>
          {forLogin
            ? 'Not registered yet, then register now!'
            : 'Already registered, then go to the login page!'}
        </LinkToRegister>
      </Form>
    </FormContainer>
  );
};
RegisterLoginForm.propType = {
  forLogin: propTypes.bool,
};
export default RegisterLoginForm;
