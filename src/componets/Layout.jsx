// import Sidebar from "./Sidebar";
import { Outlet} from 'react-router-dom'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Layout =({children}) =>{
    return(
        <>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={2}>
        {/* <Sidebar/> */}
        </Grid>
        <Grid item xs={10}>
        <Outlet/>      
        </Grid>
      </Grid>
    </Box>
        {/* <Outlet/>       */}
        </>
    )
}

export default Layout;