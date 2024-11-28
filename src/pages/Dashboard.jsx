import {Box, Typography} from "@mui/material"
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';


function Dashboard(){
  return (    
    <Box sx={{backgroundColor:'whitesmoke', m: '20px'}}>
    <Box sx={{display: 'flex', flexDirection:'column',justifyContent: 'center', gap:'100px'}}>
    
             <Typography variant="h4" sx={{display: 'flex', gap: 40, m: '20px', justifyContent: 'center',borderRadius:'10 px'}}>
                  Graph of All
            </Typography>

            <PieChart series={[
              {
          data: [
            { id: 0, value: 30, label: 'Savings' },
            { id: 1, value: 20, label: 'Withdraw' },
            { id: 2, value: 20, label: 'Loan' },
          ],
        },
      ]}
      width={1000}
      height={300}
      />
          <Typography variant="h4"> 
                  Graph of User of Savings
          </Typography>
        
        <LineChart
            xAxis={[{ data: [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
            series={[
            {
              data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              showMark: ({ index }) => index % 2 === 0,
            },
          ]}
          width={1000}
          height={500}
        />
         
            <Typography variant="h4">
                    Graph of User of Withdrew
            </Typography>
    
      <LineChart
          xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
          series={[
            {
              data: [1, 2, 3, 4, 6, 9, 8, 9, 10, 8],
              showMark: ({ index }) => index % 2 === 0,
          },
        ]}
        width={1000}
        height={500}
      />
          </Box>
      </Box>
    )
}


export default Dashboard