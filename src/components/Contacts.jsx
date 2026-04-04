import ContactContent from "./ContactContent";

function Contacts({ contacts }) {
  return (
    <div className="contacts-tab">
      <div className="contact-text-h">
        <div className="contact-line"></div>
        <span>*</span>
        <div className="center">
          <h2>Contacts</h2>
        </div>
        <span>*</span>
        <div className="contact-line"></div>
      </div>
      <div>
        {contacts.map((contact) => (
          <ContactContent contact={contact} key={contact.id} />
        ))}
      </div>
    </div>
  );
}

export default Contacts;
