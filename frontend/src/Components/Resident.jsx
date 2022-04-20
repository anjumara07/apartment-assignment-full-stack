import * as React from 'react';
import {useParams} from "react-router-dom";
import {useState , useEffect} from 'react';
import axios from 'axios';
import './Resident.css'

export function Resident() {

  const {id} = useParams();

  const [resident,setResident] = useState({})
          

  useEffect(()=>{
    // console.log(id)
     axios.get(`https://apartment-manager-065.herokuapp.com/residents/${id}`).then((res)=>{
          console.log(res.data)
          setResident(res.data)
      })
  },[])



  return (

      <>
        {resident.name?<div className="box" style={{width:'300px' , margin:'auto' , marginTop:'30px'}} key={resident._id}>
          <h2>Details</h2>
          <img src={resident.apartmentId.image} alt="" width="300" />
          <p>Name : {resident.name}</p>
          <p>Age : {resident.age}</p>
          <p>Gender : {resident.gender}</p>
          <p>Block : {resident.apartmentId.block}</p>
          <p>Flat Number : {resident.apartmentId.flatno}</p>
          <p>Total Resident : {resident.apartmentId.totalresident}</p>
        </div>:<div>Loading...</div>}
        

    </>
  );
}