import Axios from 'axios';
import { useEffect, useState } from 'react';
import StudentListRow from './StudentListRow';

function StudentList() {

    const [studentList, setStudentList] = useState([]);

    useEffect(()=>{
        Axios.get("https://crud-backend-deployment-po8z.onrender.com/studentRoute/")
        .then((res)=>{
            if(res.status===200){
                setStudentList(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((err)=>{alert(err)})
    },[])

    const ListItems = () =>{
        return studentList.map((val,ind)=>{
            return <StudentListRow obj={val} />
        }) 
    }

    return (
        <table class="table table-striped table-bordered table-success">
            <thead>
                <tr>
                    <th class="text-center">Student Name</th>
                    <th class="text-center">Student Email</th>
                    <th class="text-center">Student Roll No</th>
                    <th class="text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
    );
}

export default StudentList;