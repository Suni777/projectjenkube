import {useState} from 'react'
import { Button, Input,Stack,Box } from "@mui/material";
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
    <div>
      <img src='nvclogo.jpg' />
      <h4 style={{backgroundColor:"orange"}}>NVC Fund bank</h4>
      <Box sx={{ width: "100%" }}>
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
  );
};

export default Sign;
