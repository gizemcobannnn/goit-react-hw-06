import Contact from "./Contact";
import Styles from "./ContactList.module.css"
import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";
import  {selectNameFilter} from "../redux/filtersSlice"
const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector((state) => state.contacts.items);
  const nameFilter = useSelector(selectNameFilter); // Redux'tan filtre değerini alıyoruz


  const filteredContacts = nameFilter
    ? contacts.filter((contact) =>
        contact.name.toLowerCase().includes(nameFilter.toLowerCase())
      )
    : contacts;

  const handleDelete = (contactId) =>{
    dispatch(deleteContact(contactId));
  }
  
  return (
    <div className={Styles["contact-list"]}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            onDelete={() => handleDelete(contact.id)}           />
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </div>
  );
};


export default ContactList;
