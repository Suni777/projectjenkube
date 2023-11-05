import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Button, Input } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate()
  const RegisterUser = ()=>{
    navigate('/')
  }
  return (
    <div>
      <h4>NVC Fund bank</h4>
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <Input type="text" placeholder="UserName" />
          <Input type="text" placeholder="Account Number" />
          <Input type="text" placeholder="Mobile Number" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm password" />
          <Button onClick={RegisterUser}>Register</Button>
        </Stack>
      </Box>
    </div>
  );
};

export default Registration