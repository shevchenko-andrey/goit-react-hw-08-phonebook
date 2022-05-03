import { ContactList } from './contacts.styled';
import ContactsItem from '../ContactsItem';

const ContactsSkeleton = () => {
  return (
    <ContactList>
      <ContactsItem
        name="############"
        key="###skelet###"
        id="###skelet###"
        phone="############"
      />
    </ContactList>
  );
};
export default ContactsSkeleton;
