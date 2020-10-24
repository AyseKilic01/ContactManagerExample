import React, {useState} from "react";
import ReactDOM from "react-dom";

function AddPersonForm(props){
  const [person, setPerson] = useState('');


function handleChange(e){
  setPerson(e.target.value);
}

function handleSubmit(e){
  if(person !== '') {
    props.handleSubmit(person);
    setPerson('');
  }
  e.preventDefault();
}
return(
 <form onSubmit ={handleSubmit}>
 <input type="text" placeholder = "Yeni Kişi Ekle" onChange={handleChange} value = {person} />
 <button type = "submit"> Ekle </button>
 </form>
);
}

function PeopleList(props){
  const arr = props.data;
  const listItems = arr.map((val,index) =>
  <li key = {index}>{val}</li>
  );
  return <ul> {listItems}</ul>;
}

function ContactManager(props){
  const [contacts, setContacts] = useState(props.data);
  function addPerson(name){
    setContacts([...contacts, name]);
  }
  return (
    <div> <AddPersonForm handleSubmit={addPerson} />
    <PeopleList data={contacts} />
    </div>
  );
}

const contacts = ["Mehmet Aknar", "Özkan Açık", "A.Kadir Dikmen", "Esma Deniz"];

ReactDOM.render(<ContactManager data={contacts} />, document.getElementById("root"));
