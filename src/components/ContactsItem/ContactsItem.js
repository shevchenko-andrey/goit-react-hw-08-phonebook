import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactsApi';
import {
  ContentsWrapper,
  Button,
  ContactWrapper,
  Name,
} from './ContactsItem.styled';
import { showDeletingToast } from './ItemToasts';
import { ListGroup } from 'react-bootstrap';
function ContactsItem({ id, name, phone }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const onDeleteContactById = id => {
    const response = deleteContact(id);
    showDeletingToast(response);
  };
  return (
    <ListGroup.Item
      as="li"
      variant="Dark"
      horizontal="sm"
      className="d-flex justify-content-between align-items-start"
    >
      <ContentsWrapper>
        <ContactWrapper>
          <Name>{name}:</Name>
          <span>{phone}</span>
        </ContactWrapper>
        <Button
          disabled={isDeleting}
          onClick={() => onDeleteContactById(id)}
          type="button"
        >
          Delete
        </Button>
      </ContentsWrapper>
    </ListGroup.Item>
  );
}
ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactsItem;
