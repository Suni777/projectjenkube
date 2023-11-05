import * as React from 'react';
import PropTypes from 'prop-types';
import Openaccount from './Openaccount';
import Fundtransfer from './Fundtransfer';
import Transactiondetails from './Transactiondetails';
import Addpayee from './Addpayee';
import { useNavigate, Link } from "react-router-dom";
import { Button, Box, Stack, Typography, Tab, Tabs } from '@mui/material';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Homepage() {
  const [value, setValue] = React.useState(0);
  const userData = JSON.parse(localStorage.getItem('user'))
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate()
  const logout = ()=>{
    navigate('/')
  }

  return (
    <Box sx={{ width: '95vw' , height:"95vh"}}>
      <Box>
      <Stack direction="row" spacing={2}>
      <img  src='nvclogo.jpg' style={{width:'30px', height:'30px'}} />
      <h4>Welcome to NVC Fund Bank <span style={{color:'green'}}> {userData.username.toUpperCase() || 'USER'}!</span></h4>
      <p>For Support/Complaints <a href="helpdesk@nvcbank.com">helpdesk@nvcbank.com</a> </p>
      <p></p>
      <Button onClick={logout}  variant="contained" color="error">Logout</Button>
      </Stack>
  
      </Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Open Account" {...a11yProps(0)} />
          <Tab label="Add Benificary" {...a11yProps(1)} />
          <Tab label="Fund Transfer" {...a11yProps(2)} />
          <Tab label="Statement" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Openaccount/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      <Addpayee/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      <Fundtransfer/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      <Transactiondetails/>
      </CustomTabPanel>
    </Box>
  );
}