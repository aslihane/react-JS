import React from 'react'

const Contacts = ({contacts}) => {
    return (
        <div>
            <ul>
            {contacts.map((contact) => (
              <li>{contact.username}:{contact.name}</li>
            ))}
            </ul>
        </div>
    )
};

export default Contacts