import ContactForm from 'components/Form';
import Section from 'components/Section';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';
import Underline from 'components/Underline';
const ContactsPage = () => {
  return (
    <>
      <Section title="PhoneBook">
        <ContactForm />
      </Section>
      <Underline />
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </>
  );
};
export default ContactsPage;
