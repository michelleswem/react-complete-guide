import React from 'react';
import classes from'./Person.css';

const Person = (Props) => {
return (
<div className = {classes.Person}> 
<p onClick = {Props.click}>I am {Props.name} and I am {Props.age} years old!</p>
<p>
{Props.children}
</p>
<input type="text" onChange={Props.changed} value = {Props.name}/>
</div>
)};

export default Person;
