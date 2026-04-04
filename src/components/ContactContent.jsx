function ContactContent({ contact }) {
  return (
    <div key={contact.id}>
      <img src="#" alt={contact.type} />
      <p>{contact.content}</p>
    </div>
  );
}

export default ContactContent;
