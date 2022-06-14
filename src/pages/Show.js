import React from 'react';

const Show = (props) => {
    const avatarURL = "https://baycityfireworksfestival.com/wp-content/uploads/2019/03/avatar-1577909_960_720.png"
    const id = props.match.params.id;
    const person = props.people.find(function(p) {
        return p.__id === id
    });
    return (
    <div className = "person">
        <h1>{person.name}</h1>
        <h2>{person.title}</h2>
        {
            person.image 
            ? <img src = {person.image} alt = {person.name}/>
            : <img src = {avatarURL} alt = "placeholder"/>
        }
    </div>
    )
}

export default Show;