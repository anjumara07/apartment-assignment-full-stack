import * as React from 'react';
import {useParams} from "react-router-dom";
import {useState , useEffect} from 'react';
import axios from 'axios';
import './Resident.css'

export function Resident() {

  const {id} = useParams();

  const [resident,setResident] = useState({})

  useEffect(()=>{
      getData();
  },[])

  const getData = () =>{
      axios.get(`http://localhost:2345/residents`).then((res)=>{
          let data = res.data;
          let ans = data.filter((e)=>{
                return e.apartmentId._id === id
              })
          console.log(...ans);
          setResident({...ans})
      })
  }


  return (

      <>
        
        {/* <div className="box" style={{width:'300px' , margin:'auto' , marginTop:'50px'}} key={resident._id}>
          <h2>Resident Details</h2>
          <p>Name : {resident.name}</p>
          <p>Age : {resident.age}</p>
          <p>Gender : {resident.gender}</p>
          <p>Block : {resident.apartmentId.block}</p>
          <p>Flat Number : {resident.apartmentId.flatno}</p>
          <p>Total Resident : {resident.apartmentId.totalresident}</p>
        </div> */}

    </>
  );
}