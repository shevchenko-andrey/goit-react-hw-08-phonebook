import { useRef } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { showErrorToast, showPromiseToast } from './formToasts';
import {
  useAddContactMutation,
  useGetContactsQuery,
} from '../../redux/contactsApi';

import {
  FormText,
  Button,
  InputForm,
  FormStyled,
  PhoneWrapper,
} from './Form.styled';

import 'yup-phone';

const schema = yup.object().shape({
  name: yup.string().required().min(2).max(20),
  phone: yup.string().phone().required('A phone number is required'),
});

const ContactForm = () => {
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();
  const loginInputId = useRef(nanoid());
  const telInputId = useRef(nanoid());

  const handleSubmit = (values, { resetForm }) => {
    const { name, phone } = values;

    const isDuplicated = data.find(
      contacts => contacts.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicated) {
      showErrorToast(name);
      return;
    }
    const response = addContact({ name, phone });
    showPromiseToast(response);
    resetForm();
  };
  const formError = message => <FormText>{message}</FormText>;

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormStyled autoComplete="off">
        <div>
          <label htmlFor={loginInputId.current}>Name</label>
          <div>
            <InputForm id={loginInputId.current} name="name" type="text" />
            <ErrorMessage name="name" render={formError} />
          </div>
        </div>
        <PhoneWrapper>
          <label htmlFor={telInputId.current}>Phone</label>
          <div>
            <InputForm id={telInputId.current} name="phone" type="tel" />
            <ErrorMessage name="phone" render={formError} />
          </div>
        </PhoneWrapper>
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};

export default ContactForm;
