import { useState, useEffect } from "react";
import Contact from "./Contact";
import PropTypes from "prop-types";
import Styles from "./ContactList.module.css"

const ContactList = ({ contacts:initialContacts, searchTerm, onDeleteContact }) => {
  const [contactsList, setContactsList] = useState(initialContacts);

  useEffect(() => {
    if (searchTerm) {
      const filteredContacts = initialContacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setContactsList(filteredContacts);
    } else {
      setContactsList(initialContacts); // Arama terimi boşsa tüm listeyi göster
    }
  }, [searchTerm, initialContacts]); 
  
  return (
    <div className={Styles["contact-list"]}>
      {contactsList.length > 0 ? (
        contactsList.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            onDelete={()=>{onDeleteContact(contact.id)}} // Her bir contact bileşenine `onDelete` gönderiliyor
          />
        ))
      ) : (
        <p>No contacts found</p>
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
  searchTerm: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired, // Silme fonksiyonunun zorunlu olduğundan emin olun
};

export default ContactList;
