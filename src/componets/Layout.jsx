import Sidebar from "./Sidebar";
import { Outlet} from 'react-router-dom'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Layout =({children}) =>{
    return(
        <>  
        <Outlet/>      
        </>
    )
}

export default Layout;