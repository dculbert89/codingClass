function ContactRow({setSelectedContactId, contact}) { 
  // const {name, email, phone} = setSelectedContactId
    
  return(
    <tr
      onClick={() => {
        setSelectedContactId(contact.id);
      }}>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
    </tr>
  )

}

export default ContactRow