import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Button, Input } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate()
  const RegisterUser = ()=>{
    navigate('/')
  }
  return (
    <div>
       <div style={{display:'flex'}}>
        <div>
          <img src="dbank.png" alt="dbank" srcset="" />
        </div> 
       <div>
       <Box sx={{ width: "100%", margin:'20px' }}>
        <img src='nvclogo.jpg' />
       <h4 style={{backgroundColor:"orange"}}>NVC Fund bank</h4>
        <Stack spacing={2}>
          <Input type="text" placeholder="UserName" />
          <Input type="text" placeholder="Mobile Number" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm password" />
          <Button onClick={RegisterUser} variant="outlined">Register</Button>
          <Link to='/'>Sign In My Account</Link>
        </Stack>
      </Box>
       </div>
       </div>      
    </div>
  );
};

export default Registration