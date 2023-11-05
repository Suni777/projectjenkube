
import Error from "./componets/Error";
import Layout from "./componets/Layout";
import Homepage from "./componets/Homepage";
import Registration from "./componets/Registration";
import Sign from "./componets/Sign";


export const routes = [
    {
        path:"/",
        element:<Layout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'',
                element:<Sign/>
            },
            {
                path:'registration',
                element:<Registration/>
            },
            {
                path:'dashboard',
                element:<Homepage/>
            },
        ]
    }
]

