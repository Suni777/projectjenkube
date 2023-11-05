import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Button, Input } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

const Sign = () => {
  const navigate = useNavigate()
  const signIn = ()=>{
    navigate('/dashboard')
  }
  return (
    <div>
      <img src='nvclogo.jpg' />
      <h4 style={{backgroundColor:"orange"}}>NVC Fund bank</h4>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <Input type="text" placeholder="username" />
          <Input type="password" placeholder="password" />
          <Button onClick={signIn} variant="outlined">Sign in</Button>
        </Stack>
        <br/>
        <Link to='/registration'>Register new Account</Link>
      </Box>
    </div>
  );
};

export default Sign;
