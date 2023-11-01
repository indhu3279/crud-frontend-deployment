import React from "react";
import StudentForm from "./StudentForm";
import { useParams } from "react-router-dom";
import { useEffect, useState} from "react";
import  Axios  from "axios";

function EditStudent() {

    const {id} = useParams();

    const [initialData, setInitialData] = useState({name:"",email:"",rollNo:""});
    const [arr, setArr] = useState([]);


    useEffect(()=>{
        Axios.get("https://crud-backend-deployment-po8z.onrender.com/studentRoute/update-student/"+id)
        .then((res)=>{
            if(res.status===200){
                const {name,email,rollNo} = res.data[0];
                setInitialData({name,email,rollNo});
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{alert(err)})
    },[id])


    const getState = (childData) =>{ //child data
        setArr(childData);
    }

    const handleSubmit = () =>{
        const data = {name: arr[0], email: arr[1], rollNo: arr[2]}
        Axios.put("https://crud-backend-deployment-po8z.onrender.com/studentRoute/update-student/"+id,data)
        .then((res)=>{
            if(res.status===200){
                alert("record updated successfully")
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{alert(err)});
    }

    return (
          <form onSubmit={handleSubmit}>
            <StudentForm 
                getState={getState}
                nameValue={initialData.name}
                emailValue={initialData.email}
                rollNoValue={initialData.rollNo}
            >
                Update Student
            </StudentForm>
          </form>  
    );
}

export default EditStudent;