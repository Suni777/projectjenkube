import {CardContent,Typography} from '@mui/material';
 const benificaryList = JSON.parse(localStorage.getItem('acd'))

const AccountHoldersList = () => {
  return (
    <>
    <h4>Account Details</h4>
    <CardContent>
      <Typography variant="h5" component="div">
       {benificaryList?.name || "NA"}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
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