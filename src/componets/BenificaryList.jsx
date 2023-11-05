
import {Box,Card,CardActions,CardContent,Button,Typography} from '@mui/material';
 const benificaryList = JSON.parse(localStorage.getItem('benificary'))
 console.log(benificaryList,"11");

const card = (
  <>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Available Benificary
      </Typography>
      <Typography variant="h5" component="div">
       {benificaryList?.name || "NA"}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Mobile: {benificaryList?.mobile || "NA"}
      </Typography>
      <Typography variant="body2">
      Account Number: {benificaryList?.accno || "NA"}
        <br />
        IFSC Code: {benificaryList?.ifsc || "NA"}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Transact</Button>
    </CardActions>
  </>
);

export default function BenificaryList() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}


