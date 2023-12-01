import React, { useState } from 'react'
import StudentHeader from './StudentHeader'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddStudent = () => {

    const navigate=useNavigate()

    const [inputField,changeInputField]=useState(

        {
        "name":"",
        "admno":"",
        "rollno":"",
        "college":""
       }
    
      )

      const inputHandler=(event)=>{
        changeInputField({...inputField,[event.target.name]:event.target.value})
      }

      const readValue=()=>{
        console.log(inputField)
        axios.post("http://127.0.0.1:8000/api/add/",inputField).then(
            (response)=>{
               alert(response.data.status) 
            }
        )

       












      }

  return (
    <div>
        <StudentHeader />
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12">

            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6">
                    <label htmlFor="" className="form-label">Name </label>
                    <input type="text" className="form-control" name="name" value={inputField.name} onChange={inputHandler}/>

                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                <label htmlFor="" className="form-label">Admission Number</label>
                    <input type="text" className="form-control" name='admno' value={inputField.admno} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                <label htmlFor="" className="form-label">Roll Number</label>
                    <input type="text" className="form-control" name='rollno' value={inputField.rollno} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-6 col-md-6">
                <label htmlFor="" className="form-label">College</label>
                    <input type="text" className="form-control" name='college' value={inputField.college} onChange={inputHandler}/>
                </div>

               
                <div className="col col-12 col-sm-6 col-md-6">
                    <button onClick={readValue} className="btn btn-success">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default AddStudent