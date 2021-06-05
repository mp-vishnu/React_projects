import React,{useEffect, useState} from "react";
import {uuid} from "uuidv4";
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
/*import ContactCard from "./components/ContactCard";*/
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";

function App() {
 const [contacts,setContacts]=useState([]);
 const LOCAL_STORAGE_KEY="contacts";
 const addContactHolder=(contact)=>{
   setContacts([...contacts,{id:uuid(),...contact}]);
 } 
 const removeContactHandler=(id)=>{
   const newContactList=contacts.filter((contact)=>{
     return contact.id!==id;
   });
   setContacts(newContactList);
 };
 useEffect(()=>{
  const retrieveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if(retrieveContacts) setContacts(retrieveContacts);
},[]);
 useEffect(()=>{
   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
 },[contacts]);
 return (
    <div>
  <Header/>
  <AddContact addContactHandler={addContactHolder}/>
  {/*<ContactCard/>*/}
   <ContactList contacts={contacts} getContactId={removeContactHandler}/>
   
    </div>
   
  );
}

export default App;
