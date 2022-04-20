import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import {useState , useEffect} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";


export function BasicTable() {

  const [apartment,setApartment] = useState([])
  const [page,setPage] = useState(1)

  useEffect(()=>{
      getData();
  },[page])

  const getData = () =>{
      axios.get(`https://apartment-manager-065.herokuapp.com/residents?_limit=3&_page=${page}`).then((res)=>{
        //   console.log(res.data)
          setApartment([...res.data])
      })
  }

  const handleSort = (data) =>{
        if(data==='asc'){
            let asc = apartment.sort((a,b)=>a.apartmentId.flatno - b.apartmentId.flatno)
            setApartment([...asc]);
        }
        else{
            let desc = apartment.sort((a,b)=>b.apartmentId.flatno - a.apartmentId.flatno)
            setApartment([...desc]);
        }
  }

  const navigate = useNavigate()
  const handleRequest = (id)=>{
       navigate(`/resident-detail/${id}`)
  }

  const handleSearch = (e) =>{
      axios.get(`https://apartment-manager-065.herokuapp.com/residents`).then((res)=>{
        //   console.log(res.data)
          let data = res.data;
          let ans = data.filter((el)=>{
              return el.apartmentId.block === e.target.value
          })
        //   console.log(ans)
          if(ans){
              setApartment([...ans])
          }
          if(e.target.value === ""){
              getData()
          }
      })
       
  }



  const handleFilter = (e) =>{
       axios.get(`https://apartment-manager-065.herokuapp.com/residents`).then((res)=>{
        //   console.log(res.data)
          let data = res.data;
          let ans = data.filter((el)=>{
               return el.apartmentId.type.includes(e.target.value)
          })
        //   console.log(ans)
          if(ans){
              setApartment([...ans])
          }
          if(e.target.value === ""){
              getData()
          }
      })
  }


  return (

      <>
        <div style={{margin:'30px'}}>
               <input className="searchBox" onChange={handleSearch} placeholder="Search Here By Block" />
               <input className="searchBox" onChange={handleFilter} placeholder="Filter Type Here..." />
               <Button style={{marginRight:'20px'}} variant="contained">Filter by Resident</Button>
               <Button style={{marginRight:'20px'}} variant="contained" onClick={()=>{handleSort('asc')}}>Sort Inc. by Flat No.</Button>
               <Button variant="contained" onClick={()=>{handleSort('desc')}}>Sort Dec. by Flat No.</Button>
        </div>

        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead style={{backgroundColor:'black' , color:'white'}}>
            <TableRow>
                <TableCell style={{color:'white'}} align="center">Name</TableCell>
                <TableCell style={{color:'white'}} align="center">Type</TableCell>
                <TableCell style={{color:'white'}} align="center">Flat No.</TableCell>
                <TableCell style={{color:'white'}} align="center">Block</TableCell>
                <TableCell style={{color:'white'}} align="center">Total Resident</TableCell>
                <TableCell style={{color:'white'}} align="center">Image</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {apartment.map((row) => (
                    <TableRow key={row._id} onClick={()=>{handleRequest(row._id)}}>
                        <TableCell align="center" component="th" scope="row">{row.apartmentId.name}</TableCell>
                        <TableCell align="center">{row.apartmentId.type}</TableCell>
                        <TableCell align="center">{row.apartmentId.flatno}</TableCell>
                        <TableCell align="center">{row.apartmentId.block}</TableCell>
                        <TableCell align="center">{row.apartmentId.totalresident}</TableCell>
                        <TableCell align="center"><img src={row.apartmentId.image} alt="" width="200px" /></TableCell>
                    </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        
        <Button style={{margin:'20px'}} variant="contained" disabled={page===1} onClick={()=>{setPage(page-1)}}>Prev</Button>
        <Button style={{margin:'20px'}} variant="contained" onClick={()=>{setPage(page+1)}}>Next</Button>
    </>
  );
}