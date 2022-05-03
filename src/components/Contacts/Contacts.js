import { useSelector } from 'react-redux';
import { ContactList } from './contacts.styled';
import { useGetContactsQuery } from 'redux/contactsApi';
import ContactsItem from '../ContactsItem';
import { getvisibleContacts } from 'redux/selectors';
import ContactsSkeleton from './contactSkeleton';
function Contacts() {
  const { data, isFetching } = useGetContactsQuery({});
  const visibleContacts = useSelector(state => getvisibleContacts(state, data));

  return (
    <>
      {isFetching && !visibleContacts && <ContactsSkeleton />}
      <ContactList>
        {visibleContacts &&
          visibleContacts.map(({ id, name, phone }) => (
            <ContactsItem name={name} key={id} id={id} phone={phone} />
          ))}
      </ContactList>
    </>
  );
}

export default Contacts;
