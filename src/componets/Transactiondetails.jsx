import { Button, Grid,Input } from "@mui/material";
import {useState} from 'react'
const Transactiondetails = () => {
  const [statement, setStatement] = useState([])
  const getStatement = ()=>{
    setStatement(JSON.parse(localStorage.getItem('transactionHistory')))
  }
  console.log(statement,'statement');
  return (
    <>
    <Button onClick={getStatement} variant="outlined">Get Statement</Button>
      {statement.map((itm)=><p>{itm}</p>)}
    </>
  )
}

export default Transactiondetails