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
  const { data, isFetching, isSuccess, refetch } = useGetContactsQuery();
  useEffect(() => {
    refetch();
  }, [token, refetch]);

  const visibleContacts = useSelector(state => getvisibleContacts(state, data));

  return (
    <>
      <ContactList>
        {isFetching && !visibleContacts && <ContactsSkeleton />}
        {isSuccess &&
          visibleContacts.length > 0 &&
          visibleContacts.map(({ id, name, number }) => (
            <ContactsItem name={name} key={id} id={id} phone={number} />
          ))}
        {isSuccess && visibleContacts.length < 1 && (
          <p>You don't have any contacts yet</p>
        )}
      </ContactList>
    </>
  );
}

export default Contacts;
