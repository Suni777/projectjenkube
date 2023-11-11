import { Box, Input, Stack, Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import AccountHoldersList from "./AccountHoldersList";
const Openaccount = () => {
  const [newAccount, setNewAccount] = useState({
    accno:Math.floor((Math.random()*10)+10000000000000),
    address:'',
    email:'',
    mobile:'',
    name:'',
});
  const [storedAccount, setStoredAccount] = useState(pre=>({...pre,newAccount}));
  console.log(newAccount, "newAccount", storedAccount);
  const RegisterUser = () => {
    setStoredAccount(pre=>({...pre,newAccount}))
    localStorage.setItem("acd", JSON.stringify(newAccount));
    localStorage.setItem("sacd", JSON.stringify(storedAccount));
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
            label="Mobile"
            variant="filled"
            onChange={(e) =>
              setNewAccount((pre) => ({ ...pre, mobile: e.target.value }))
            }
          />
          <TextField
            id="filled-basic"
            label="Email"
            variant="filled"
            onChange={(e) =>
              setNewAccount((pre) => ({ ...pre, email: e.target.value }))
            }
          />
          <TextField
            id="filled-basic"
            label="Address"
            variant="filled"
            onChange={(e) =>
              setNewAccount((pre) => ({ ...pre, address: e.target.value }))
            }
          />
          <Input
            type="file"
            placeholder="Upload Proofs"
            label="Govt Proof"
            onChange={(e) =>
              setNewAccount((pre) => ({ ...pre, file: e.target.value }))
            }
          />
          <Button type="submit" onClick={RegisterUser} variant="outlined">
            Create
          </Button>
        </Stack>
      </Box>
      </Grid>
      <Grid item xs={8}>
      <AccountHoldersList/>
      </Grid>
      <p>
        {" "}
        Mandatory documents Required for Opening account in our bank as follows
        <b> KYC Docs, </b>
        <b> Mobile Number, </b>
        <b> Email, </b>
        <b> Address for communication, </b>
        <b> Any valid Govt ID proof, </b>
      </p>
      
      </Grid>
    </>
  );
};

export default Openaccount;
