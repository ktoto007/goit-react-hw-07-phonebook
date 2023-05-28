import { useSelector } from 'react-redux';
import { ListItem } from 'components/listItem/ListItem';

export const ContactList = () => {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filter = useSelector(state => state.phonebook.filter);

  const onFilterContact = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul>
      {onFilterContact().map(({ id, name, number }) => (
        <ListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};
