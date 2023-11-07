import {useState} from 'react'
import { Button, Input,Stack,Box, Grid } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

const Sign = () => {
  const [signInDetails, setSignInDetails] = useState([])
  const navigate = useNavigate()
  const signIn = ()=>{
    if(signInDetails.username && signInDetails.password){
      localStorage.setItem('user',JSON.stringify(signInDetails))
      navigate('/dashboard')
    }else{
      alert('Invalid credentials')
    }
    
  }
  return (
    <>
    <div style={{display:'flex'}}>
 <div>
 <img src="bank.jpg" alt="bank" srcset="" style={{width:'60vw'}} />
 </div>
 <div style={{ margin:'20px', padding:'30px'}}>
 <Box sx={{ width: "100%" }}>
       <img src='nvclogo.jpg' />
      <h4 style={{backgroundColor:"orange"}}>NVC Fund bank</h4>
        <Stack spacing={2}>
          <Input type="text" placeholder="username" 
          onChange={e=>setSignInDetails(pre=>({...pre,
            username:e.target.value}))}  
            />
          <Input type="password" 
          placeholder="password" 
          onChange={e=>setSignInDetails(pre=>({...pre,
            password:e.target.value}))}  
          />
          <Button onClick={signIn} variant="outlined">Sign in</Button>
        </Stack>
        <br/>
        <Link to='/registration'>Register new Account</Link>
  </Box> 
 </div>
    </div>   
    </>
  );
};

export default Sign;
