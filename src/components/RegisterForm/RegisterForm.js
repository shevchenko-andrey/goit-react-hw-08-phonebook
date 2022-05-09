import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import { Form, Button } from 'react-bootstrap';
import { FormContainer, LinkToRegister, FormName } from './RegisterForm.styled';
import { register } from 'redux/auth-operations';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().min(2).required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.target;
  //   const name = form.elements.name.value;
  //   const email = form.elements.email.value;
  //   const password = form.elements.password.value;
  //   dispatch(register({ name, email, password }));
  //   form.reset();
  // };

  return (
    <FormContainer fluid="sm">
      <FormName>Register</FormName>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, touched, errors, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                onChange={handleChange}
                value={values.name}
                isValid={touched.name && !errors.name}
                required
                isInvalid={errors.name}
                placeholder="Enter your name"
              />
              <Form.Control.Feedback type="invalid">
                <ErrorMessage name="email" />
              </Form.Control.Feedback>
            </Form.Group>

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
            <LinkToRegister to="/login">
              Already registered, then go to the login page!
            </LinkToRegister>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default RegisterForm;
