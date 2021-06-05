import React from "react";
import ContactCard from "./ContactCard";

const ContactList =(props)=>{
    console.log(props.contacts);
    const deleteContactHandler=(id)=>{
        props.getContactId(id);;
    };
    const renderContactList= props.contacts.map((contact)=>{
        return(
           <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
        );
    }
    )
    return(
        <div className="container">
        <h1>Contact List</h1>
        {renderContactList}
        </div>
    );
}
export default ContactList;

