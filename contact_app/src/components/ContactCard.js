import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt, faUser } from '@fortawesome/free-solid-svg-icons';
const ContactCard=(props)=>{
    const {id, name, email}=props.contact;
    return(
        <div className="container" style={{marginTop:"15px"}}>
        <div className="row">
        <div className="col-6">
        <div className="h3"><i className="h3" style={{marginRight:"15px"}}><FontAwesomeIcon icon={faUser}/></i>{name}</div>
        <div className="h5 lead">{email} </div>
        </div>
        <div className="col-6">
        <i className="h3" style={{marginRight:"15px"}} onClick={()=>{props.clickHandler(id)}}><FontAwesomeIcon icon={faTrashAlt}/></i>
        {/*<i className="h3"><FontAwesomeIcon icon={faEdit}/></i>*/}
        </div>
        </div>
        </div>
    );
}

export default ContactCard;