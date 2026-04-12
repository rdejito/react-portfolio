function ContactContent({ contact }) {
  return (
    <div className="link">
      <img src={`contacts/${contact.type}.png`} alt={contact.type} />
      <p>{contact.content}</p>
    </div>
  );
}

export default ContactContent;
