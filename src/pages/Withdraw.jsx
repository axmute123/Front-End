import {Box, Typography} from "@mui/material"
import { BarChart } from '@mui/x-charts/BarChart';

function Withdraw(){
    return (
        <Box sx={{backgroundColor:'whitesmoke', m: '20px'}}>
        <Box sx = {{display: 'flex', flexDierection:'row',  gap: 10, justifyContent:'center', m:'7px',p:'100px', backgroundColor:'whitesmoke'}}>
        <Box>
                <Typography variant="h4"> 
                        Withdraw Analysis
                </Typography>
        </Box>
    <BarChart  
    
    series={[
        { data: [20, 20, 24, 34] },
        { data: [20, 20, 49, 30] },
        { data: [30, 25, 30, 50] },
        { data: [20, 50, 15, 25] },
    ]}
        height={500}
        width = {700}
        xAxis={[{ data: ['Nov', 'Dec', 'Jan', 'Feb'], scaleType: 'band' }]}
        margin={{ top: 20, bottom: 30, left: 40, right: 10}}
    />
    
        </Box>
    </Box>



    )
}



export default Withdraw