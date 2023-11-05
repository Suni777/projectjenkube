import * as React from 'react';
import {Box,Select, FormControl, MenuItem, InputLabel} from '@mui/material';

export default function DropdownList({name, mobile}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 , maxWidth:250}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Bank</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Bank"
          onChange={handleChange}
        >
          <MenuItem value={name}>{name} - {mobile}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
