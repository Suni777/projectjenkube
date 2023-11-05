import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
      <Stack direction="row" spacing={2}>
      <h4>Welcome to NVC Fund Bank</h4>
      <p>For Support/Complaints <a href="helpdesk@nvcbank.com">helpdesk@nvcbank.com</a> </p>
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
      Open Account
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      Add Benificary
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      Fund Transfer
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      Statement
      </CustomTabPanel>
    </Box>
  );
}