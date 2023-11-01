import StudentForm from "./StudentForm";
import React, { useState } from 'react';
import Axios from 'axios';

function CreateStudent() {

    const [arr, setArr] = useState([]); //[Raj,raj@gmail,1]

    const getState = (childData) =>{ //child data
        setArr(childData);
        console.log(arr);
    }

    const handleSubmit = () =>{
        const data = {name: arr[0], email: arr[1], rollNo: arr[2]}
        Axios.post("https://crud-backend-deployment-po8z.onrender.com/studentRoute/create-student",data)
        .then((res)=>{
            if(res.status===200){
                alert("record added successfully")
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{alert(err)});
    }

    return (
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState}
                nameValue=""
                emailValue=""
                rollNoValue=""
            >
                Create Student
            </StudentForm>
        </form>
    );
}

export default CreateStudent;