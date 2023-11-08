import * as React from 'react';
import {Box,Select, FormControl, MenuItem, InputLabel} from '@mui/material';

export default function DropdownList({name, mobile,label}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
let optionItems = name?.map((itm) =>
<MenuItem value={itm?.name}>{itm?.name}</MenuItem>
);
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={label}
          onChange={handleChange}
          style={{width:'300px'}}
        >
        {optionItems}
        </Select>
      </FormControl>
    </Box>
  );
}
