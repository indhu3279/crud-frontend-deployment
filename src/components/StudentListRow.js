import Axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function StudentListRow(props) {

    const {_id, name, email, rollNo} = props.obj;

    const handleClick = () =>{
        Axios.delete("https://crud-backend-deployment-po8z.onrender.com/studentRoute/delete-student/"+_id)
        .then((res)=>{
            if(res.status===200){
                alert("record deleted successfully")
                window.location.reload();
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{alert(err)});
    }


    return (
        <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{rollNo}</td>
        <td>
            <button class="btn btn-danger mx-3" onClick={handleClick}>Delete</button>
            <button class="btn btn-success" ><Link to={"/edit-student/"+_id} class="text-decoration-none text-light">Edit</Link></button>
        </td>
        </tr>
    );
}

export default StudentListRow;