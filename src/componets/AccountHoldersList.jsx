import {CardContent,Typography} from '@mui/material';
 const benificaryList = JSON.parse(localStorage.getItem('acd'))
console.log(benificaryList);
const AccountHoldersList = () => {
  return (
    <>
    <h4>Account Details</h4>
    <CardContent>
    <Typography sx={{ mb: 1.5 }} color="text.primary">
       {benificaryList?.accno || "NA"}
      </Typography>
      <Typography variant="h5" component="div">
       {benificaryList?.name.toUpperCase() || "NA"}
      </Typography>
      <Typography  color="text.secondary">
      Mobile: {benificaryList?.mobile || "NA"}
      </Typography>
      <Typography variant="body2">
      Email ID: {benificaryList?.email || "NA"}
        <br />
        Address: {benificaryList?.address || "NA"}
      </Typography>
    </CardContent>
    </>
  )
}

export default AccountHoldersList