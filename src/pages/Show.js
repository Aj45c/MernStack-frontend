import React from 'react';
import { useState } from 'react';

const Show = (props) => {
   
    const avatarURL = "https://baycityfireworksfestival.com/wp-content/uploads/2019/03/avatar-1577909_960_720.png"
    const id = props.match.params.id;
    const person = props.people.find(p =>  p._id === id); 
    const [editForm, setEditForm] = useState(person);
    
    const handleChange = (event) => {
        setEditForm({
            ...editForm,
            [event.target.name]: event.target.value
        })
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const {name, title, image, _id} = editForm
        props.updatePeople({name, title, image }, _id);
    };
    const handleRemovePerson = (id) => {
        props.deletePeople(id);
        props.history.push('/');
    }
    return (
    <div className = "person">
        <h1>{person.name}</h1>
        <h2>{person.title}</h2>
        {
            person.image 
            ? <img src = {person.image} alt = {person.name}/>
            : <img src = {avatarURL} alt = "placeholder"/>
        }
        <button onClick={() =>handleRemovePerson(person._id)}>Delete This Person</button>
        <form onSubmit={handleSubmit}>
            <input name = "name" 
               type = 'text'
               value = {editForm.name}
               onChange={handleChange}
               />
            <input type = 'text'
                name = "title"
                value = {editForm.title}
                onChange = {handleChange}
            />
            <input type = 'text'
                 name = "image"
                 value = {editForm.image}
                 onChange = {handleChange}/>

            <input type = 'submit' value = 'Update'/>
        </form>
    </div>
    )
}

export default Show;