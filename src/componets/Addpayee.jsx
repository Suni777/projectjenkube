import { Box, TextField, Stack, Button, Grid } from "@mui/material";
import { useState } from "react";
import BenificaryList from "./BenificaryList";
const Addpayee = () => {
  const [newAccount, setNewAccount] = useState([]);
  console.log(newAccount);
  const AddPayee1 = () => {
    localStorage.setItem("benificary", JSON.stringify(newAccount));
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Stack spacing={2}>
              <TextField
                id="filled-basic"
                label="Name"
                variant="filled"
                onChange={(e) =>
                  setNewAccount((pre) => ({ ...pre, name: e.target.value }))
                }
              />

              <TextField
                id="filled-basic"
                label="IFSC"
                variant="filled"
                onChange={(e) =>
                  setNewAccount((pre) => ({ ...pre, ifsc: e.target.value }))
                }
              />
              <TextField
                id="filled-basic"
                label="Account Number"
                variant="filled"
                onChange={(e) =>
                  setNewAccount((pre) => ({ ...pre, accno: e.target.value }))
                }
              />
              <TextField
                id="filled-basic"
                label="Mobile"
                variant="filled"
                onChange={(e) =>
                  setNewAccount((pre) => ({ ...pre, mobile: e.target.value }))
                }
              />
              <Button type="submit" onClick={AddPayee1} variant="outlined">
                Add Benificary
              </Button>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
          >
            <BenificaryList />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Addpayee;
