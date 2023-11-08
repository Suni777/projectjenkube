import { useState } from "react";
import { Button, Input, Stack, Box, Grid } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";

const Sign = () => {
  const [signInDetails, setSignInDetails] = useState([]);
  const navigate = useNavigate();
  const signIn = () => {
    if (signInDetails.username && signInDetails.password) {
      localStorage.setItem("user", JSON.stringify(signInDetails));
      navigate("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <>
     
        <div class="row">
          <div class="col-8" style={{ backgroundColor: "#2892d4", height:'100vh' }}>
            <img src="bank3.png" alt="" srcset="" style={{objectFit:'contain'}} className="p-5 m-5" />
          </div>
          <div class="col-4" style={{ backgroundColor: "#fff" }}>
            <div style={{ margin: "20px", padding: "30px" }}>
              <Box sx={{ width: "100%" }} className='align-items-center justify-content-center'>
                <img src="nvclogo.jpg" />
                <h4 >NVC Fund bank</h4>
                <Stack spacing={2}>
                  <Input
                    type="text"
                    placeholder="username"
                    onChange={(e) =>
                      setSignInDetails((pre) => ({
                        ...pre,
                        username: e.target.value,
                      }))
                    }
                  />
                  <Input
                    type="password"
                    placeholder="password"
                    onChange={(e) =>
                      setSignInDetails((pre) => ({
                        ...pre,
                        password: e.target.value,
                      }))
                    }
                  />
                  <Button onClick={signIn} variant="outlined">
                    Sign in
                  </Button>
                </Stack>
                <br />
                <Link to="/registration">Register new Account</Link>
              </Box>
            </div>
          </div>
        </div>
    
    </>
  );
};

export default Sign;
