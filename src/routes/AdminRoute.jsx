// we need a main layout
// then after main layout all the pages
import MainLayout from "../components/layouts/MainLayout"
import Dashboard from "../pages/Dashboard"
import Profiles from "../pages/Data"
import Charts from "../pages/Charts"
import Savings from "../pages/Savings"
import Withdraw from "../pages/Withdraw"
import Loan from "../pages/Loan"

const AdminRoute = [
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: "",
                element: <Dashboard/>
            },
            {
                path: "/database",
                element: <Profiles/>
            },
            {
                path: "/Charts",
                element: <Charts/>
            },
            {
                path: "/Loan",
                element: <Loan/>
            },
            {
                path: "/Savings",
                element: <Savings/>
            },
            {
                path: "/Withdraw",
                element: <Withdraw/>
            },
            
        ]
    }
]

export default AdminRoute