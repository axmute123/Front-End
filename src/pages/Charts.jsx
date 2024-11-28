import * as React from 'react';
import {Box, Typography} from "@mui/material"
import { BarChart } from '@mui/x-charts/BarChart';

   

function Charts(){
    return (
        <Box sx={{backgroundColor:'whitesmoke', m: '20px'}}>
        <Box sx = {{display: 'flex', flexDierection:'row',  gap: 10, justifyContent:'center', m:'7px',p:'100px'}}>
            <Box>
                    <Typography variant="h4"> 
                            Data Analysis
                    </Typography>
            </Box>
        <BarChart  
        
        series={[
            { data: [20, 80, 24, 34] },
            { data: [20, 26, 49, 30] },
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

    );
}




export default Charts