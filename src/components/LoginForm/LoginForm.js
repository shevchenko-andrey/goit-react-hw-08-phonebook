import { useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { FormContainer, LinkToRegister, FormName } from './LoginForm.styled';
import { logIn } from 'redux/auth-operations';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const email = form.elements.email.value;
  //   const password = form.elements.password.value;
  //   dispatch(logIn({ email, password }));
  //   form.reset();
  // };

  return (
    <FormContainer fluid="sm">
      <FormName>Login</FormName>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, touched, errors, handleChange, values }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                isValid={touched.email && !errors.email}
                placeholder="Enter email"
                required
                isInvalid={errors.email}
              />
              <Form.Control.Feedback type="invalid">
                <ErrorMessage name="email" />
              </Form.Control.Feedback>

              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
                isValid={touched.password && !errors.password}
                required
                isInvalid={errors.password}
                placeholder="Password"
              />

              <Form.Control.Feedback type="invalid">
                <ErrorMessage name="password" />
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="dark" type="submit">
              Submit
            </Button>
            <LinkToRegister to="/register">
              Not registered yet, then register now!
            </LinkToRegister>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default LoginForm;
