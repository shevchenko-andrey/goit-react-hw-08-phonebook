import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ContactList } from './contacts.styled';
import { useGetContactsQuery } from 'redux/contactsApi';
import ContactsItem from '../ContactsItem';
import { getvisibleContacts } from 'redux/selectors';
import ContactsSkeleton from './contactSkeleton';
import { getToken } from 'redux/selectors';
function Contacts() {
  const token = useSelector(getToken);
  const { data, isFetching, refetch } = useGetContactsQuery();
  useEffect(() => {
    refetch();
  }, [token, refetch]);

  const visibleContacts = useSelector(state => getvisibleContacts(state, data));

  return (
    <>
      {isFetching && !visibleContacts && <ContactsSkeleton />}
      <ContactList>
        {visibleContacts &&
          visibleContacts.map(({ id, name, number }) => (
            <ContactsItem name={name} key={id} id={id} phone={number} />
          ))}
      </ContactList>
    </>
  );
}

export default Contacts;
