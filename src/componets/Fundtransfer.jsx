import { Button, Grid,Input } from "@mui/material";
import DropdownList from '../utilities/Dropdown'
const benificaryList = JSON.parse(localStorage.getItem('benificary'))
const accountList = JSON.parse(localStorage.getItem('acd'))
const Fundtransfer = () => {
  const transfer = ()=>{

  }
  return (
    <>
   
    <Grid container spacing={2}>
    <Grid item xs={3}>
      <b>From :</b><DropdownList name={accountList.name} mobile={accountList.mobile}/> 
   
    </Grid>
    <Grid item xs={3}> 
    <Input type="text" placeholder="amount" />
      </Grid>
    <Grid item xs={4}> 
      <b>To : </b> <DropdownList name={benificaryList.name} mobile={benificaryList.mobile}/> 
      </Grid>
    <Grid item xs={2}> 
    <Button onClick={transfer} variant="outlined">Transfer</Button>
      </Grid>
      
    </Grid>
    </>
  )
}

export default Fundtransfer