import React, { useEffect, useState } from 'react';

function StudentForm(props) {

    const [name, setName] = useState(props.nameValue);
    const [email, setEmail] = useState(props.emailValue);
    const [rollNo, setRollNo] = useState(props.rollNoValue);

    useEffect(()=>{
        setName(props.nameValue);
        setEmail(props.emailValue);
        setRollNo(props.rollNoValue);
    },[props.nameValue, props.emailValue, props.rollNoValue])

    const arr = [name, email, rollNo]; //[Raj,raj@gmail.com,1]

    const handleClick = () =>{
        props.getState(arr);
    }

    return (
        <div style={{maxWidth:"40%", margin: "0px auto"}}>
            <input defaultValue={props.nameValue} class="form-control my-3" type="text" placeholder="Enter Student Name"  onChange={(event)=>setName(event.target.value)}/>
            <input defaultValue={props.emailValue} class="form-control my-3" type="text" placeholder="Enter Student Email" onChange={(event)=>setEmail(event.target.value)}/>
            <input defaultValue={props.rollNoValue} class="form-control my-3" type="text" placeholder="Enter Student Roll Number" onChange={(event)=>setRollNo(event.target.value)}/>
            <button class="btn btn-success d-block m-auto" type="submit" onClick={handleClick}>{props.children}</button>
        </div>
    );
}  

export default StudentForm;