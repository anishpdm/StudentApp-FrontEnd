import React, { useEffect, useState } from 'react'
import StudentHeader from './StudentHeader'
import axios from 'axios'

const ViewAllStudents = () => {

    const [data, changeData] = useState(

      []
     )

     const fetchData=()=>{
      axios.post("http://127.0.0.1:8000/api/viewall/").then(
        (response)=>{changeData(response.data)}
      )
     }
useEffect(()=>{fetchData()},[])

    return (
        <>
            <StudentHeader />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12">

                        <div className="row g-3">
                        <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Roll number</th>
      <th scope="col">Admission Number</th>
      <th scope="col">College</th>
    </tr>
  </thead>
  <tbody>
{data.map(
                            (value,index)=>{
                                return <tr>
                                <th scope="row">{value.name}</th>
                                <td>{value.rollno}</td>
                                <td>{value.admno}</td>
                                <td> {value.college}</td>
                              </tr>

                            }
                         )}
                            
                            </tbody>
</table>


                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default ViewAllStudents