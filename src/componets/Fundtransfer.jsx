import { Button, Grid,Input } from "@mui/material";
import DropdownList from '../utilities/Dropdown'
import axios from "axios";
const benificaryList = JSON.parse(localStorage.getItem('benificary'))
const accountList = JSON.parse(localStorage.getItem('acd'))
import countiesList from '../assets/countries.json'
const Fundtransfer = () => {
  
const transferToBank = ()=>{

}
 
  return (
    <>  
    <div className="border border-primary" style={{width:'60vw'}}>
    <div className="d-flex justify-content-around align-items-center my-2">
       <h5 style={{textAlign:'left'}}>*From Country: </h5>
       <DropdownList  name={countiesList} label='From Country'/> 
    </div>
    <div  className="d-flex justify-content-around align-items-center my-2"> 
    <h5 style={{textAlign:'left'}}>*To Country: </h5><DropdownList name={countiesList} label='To Country'/> 
      </div>
      <div  className="d-flex justify-content-around"> 
      <h5 style={{textAlign:'left'}}>*Transfer Type: </h5> <DropdownList name={countiesList} label='Transfer Type'/> 
  </div>
      <div className="d-flex justify-content-around my-2"> 
      <h5 style={{textAlign:'left'}}>*Amount Type: </h5> <DropdownList name={countiesList} label='Amount Type'/> 
  </div>
      <div className="d-flex justify-content-around my-2"> 
      <h5 style={{textAlign:'left'}}>*Amount</h5> <Input name={countiesList} label='Amount'/> 
  </div>
    <div className="d-flex justify-content-around my-2"> 
    <Button onClick={transferToBank} variant="outlined">Transfer Money</Button>
      </div>             
    </div>  
{/* 
    <Grid container spacing={1}>
    <Grid item xs={3}>
      <b>From :</b><DropdownList name={accountList.name || 'NA'} mobile={accountList.mobile || 'NA'}/> 
   
    </Grid>
    <Grid item xs={3}> 
    <Input type="text" placeholder="amount" />
      </Grid>
    <Grid item xs={4}> 
      <b>To : </b> <DropdownList name={benificaryList.name || 'NA'} mobile={benificaryList.mobile || 'NA'}/> 
      </Grid>
    <Grid item xs={2}> 
    <Button onClick={transfer} variant="outlined">Transfer</Button>
      </Grid>      
    </Grid> */}

    
    </>
  )
}

export default Fundtransfer