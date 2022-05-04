import ContactForm from '../../components/Form';
import Section from '../../components/Section';
import Contacts from '../../components/Contacts';
import Filter from '../../components/Filter';

const ContactsPage = () => {
  return (
    <>
      <Section title="PhoneBook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </>
  );
};
export default ContactsPage;
