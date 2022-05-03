import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';
import { Item, Button, ContactWrapper } from './ContactsItem.styled';
import { showDeletingToast } from './ItemToasts';
function ContactsItem({ id, name, phone }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const onDeleteContactById = id => {
    const response = deleteContact(id);
    showDeletingToast(response);
  };
  return (
    <Item>
      <ContactWrapper>
        <span>{name}:</span>
        <span>{phone}</span>
      </ContactWrapper>
      <Button
        disabled={isDeleting}
        onClick={() => onDeleteContactById(id)}
        type="button"
      >
        Delete
      </Button>
    </Item>
  );
}
ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactsItem;
