import React from "react";

 class AddContact extends React.Component {
     state={
         name:"",
         email:""
     }
     add=(e)=>{
         e.preventDefault();
         if(this.state.name==="" && this.state.email===""){
             alert("All the fields are mandatory!");
             return;
         } 
     
     this.props.addContactHandler(this.state);
     this.setState({name:"",email:""});
        };
     render(){
         return(
             <div className="container">
             <h2>Add contact</h2>
             <div className="py-4">
             <form onSubmit={this.add}>
             <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" id="staticEmail" 
            value={this.state.name}
            onChange={(e)=>{
                this.setState({name:e.target.value})
            }} placeholder="name"/>
            </div>
            </div>
            <div class="mb-3 row">
            <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
            <input type="text" readonly class="form-control-plaintext" id="staticEmail" 
            value={this.state.email}
            onChange={(e)=>{
                this.setState({email:e.target.value})
            }}placeholder="email"/>
            </div>
            </div>
            <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">Add</button>
             </div>
            </form>
             </div>
            </div>
         );
     }
 }

 export default AddContact;