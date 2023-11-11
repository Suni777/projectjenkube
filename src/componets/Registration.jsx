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
    <>
   <div class="row">
    <div class="col-8" style={{display: 'block',marginLeft: '0,auto', marginRight: '0,auto'}}>
      <img src="dbank.png" alt="dbank" srcset="" />
      </div>
    <div class="col-4">
    <div style={{ margin: "20px", padding: "30px" }}>
    <Box >
        <img src='nvclogo.jpg' />
       {/* <h4 >NVC Fund bank</h4> */}
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
    
  
    </>
  );
};

export default Registration