import React, { useState } from 'react'
import StudentHeader from './StudentHeader'
import AddStudent from './AddStudent';
import axios from 'axios';


const SearchStudent = () => {
    


    const deleteReadValue=()=>{
        console.log(inputField)
        axios.post("http://127.0.0.1:8000/api/delete/",inputField).then(
            (response)=>{
                console.log(response.data.status)
                alert(response.data.status)
                changeResult(        {"name": "", "admno": "", "rollno": "", "college": ""}
                )

            }
        )
     
    }

    const updateReadValue=()=>{
        console.log(result)
        axios.post("http://127.0.0.1:8000/api/update/",result).then(
            (response)=>{
                console.log(response.data)
                alert(response.data.status)
            }
        )
     
    }

    const readValue=()=>{
        console.log(inputField)
        axios.post("http://127.0.0.1:8000/api/search/",inputField).then(
            (response)=>{
                changeResult(response.data[0])
            }
        )
     
    }

    const [inputField,changeInputField]=useState({"admno": ""}
    )

    const [result,changeResult]=useState(
        {"name": "", "admno": "", "rollno": "", "college": ""}
        
    )

    const inputHandler=(event)=>{
        changeInputField({...inputField,[event.target.name]:event.target.value})
      }

      const inputHandler2=(event)=>{
        console.log("called")
        changeResult({...result,[event.target.name]:event.target.value})
      }


  return (
    <div>
<StudentHeader />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12">

                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12">
                            <label htmlFor="" className="form-label">Admno</label>
                            <input name='admno' value={inputField.admno} onChange={inputHandler} type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12">
                            <button onClick={readValue} className="btn btn-info">Search</button>
                        </div>
                    </div>
                </div>
            </div>


          
                  <div className="row">
                <div className="col col-12 col-sm-12 col-md-12">

                    <div className="row g-3">

                        <div className="col col-12 col-sm-6 col-md-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input name='name' type="text" className="form-control" value={result.name}  onChange={inputHandler2}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">Roll no</label>
                            <input  name='rollno' type="text" className="form-control" value={result.rollno} onChange={inputHandler2} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">Admno</label>
                            <input name='admno' type="text" className="form-control" value={result.admno} onChange={inputHandler2} readOnly/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6">
                        <label htmlFor="" className="form-label">College</label>
                            <input name='college' type="text" className="form-control" value={result.college} onChange={inputHandler2} />
                        </div>


                        <div className="col col-12 col-sm-6 col-md-6">
                        <button onClick={updateReadValue} className="btn btn-info">Update</button>

                        </div>


                        <div className="col col-12 col-sm-6 col-md-6">
                        <button onClick={deleteReadValue} className="btn btn-danger">Delete</button>

                        </div>

                    </div>


                </div>
            </div>

            
           




        </div>
    </div>
  )
}

export default SearchStudent