import {Box, Typography, TextField, Button} from "@mui/material"
import {useState, useEffect, useMemo} from 'react'
import {DataGrid} from '@mui/x-data-grid'
import { DMLProfiles, retrieveData } from '../api/Database'
import CustomModal from "../components/Modal"
import { toast } from "react-toastify"
import {Edit, Delete} from '@mui/icons-material'
import $ from 'jquery'


// {field: '', headerName: '' [, any css]}

function Profiles(){
    const [rows,setRows] = useState([])
    const [open, setOpen] = useState(false)
    const [editMode, setEditMode] = useState(false)
    const [selectedData, setSelectedData] = useState ({})

    const columns = useMemo(()=> [
        {
            field: 'id', // backend
            headerName: 'Item ID',  // output
            width: 150,
            fontWeight: 'bold'
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 200
        },
        {
            field: 'username',
            headerName: "Username",
            width: 200
        },
        {
            field: 'action',
            headerName: 'Actions',
            flex: 1,
            sortable: false,
            renderCell: params => (
                <Box
                    sx={{display: 'flex', flexDirection:'row', gap: 2, justifyContent: 'center', mt:'7px'}}
                >
                    <Button sx={{flex:1}} variant ="outlined" color="primary" onClick={()=>openModal("edit", params.row)} >
                         <Edit />
                    </Button>
                    <Button sx={{flex:1}} variant ="outlined" color="error"  onClick={()=>DeleteData(params.row)}>
                            
                         <Delete />
                    </Button>

                </Box>                
            ) 

            
        }
    ])
    
    const retrieve = () =>  retrieveData() .then(res=>{setRows(res.data)})
    
    
    useEffect(()=>{
        retrieve()   
    },[])
            const openModal = (type, item) =>{
                if(type ==='edit'){
                   
                    setEditMode(true)
                    setSelectedData(item)
                }
                  setOpen(true)  
            }
            const closeModal = () =>{
                  setEditMode(false)
                  setSelectedData({})
                  setOpen(false)
            }

            const AddData = () => {
                const DataName = $("#DataName").val()
                const DataUserName = $("#DataUserName").val()
                const DataUserPass = $("#DataUserPass").val()
                

                DMLProfiles({name: DataName, username: DataUserName, password: DataUserPass},"POST") // edit 
                .then(response=>{
                    
                    
                    if(response.ok){
                        toast.success(`${DataName} ${DataUserName} Added!`)
                        retrieve()
                        closeModal()
                    }else{
                        toast.error(response.message ?? "Something went wrong")
                    }
                })
            }

            const UpdateData = () =>  {
                const DataName = $("#DataName").val()
                const DataUserName = $("#DataUserName").val()
                const DataUserPass = $("#DataUserPass").val()

                DMLProfiles({id: selectedData.id, name: DataName, username: DataUserName, password: DataUserPass},"PATCH") // done
                .then(response=>{
                    
                    
                    if(response.ok){
                        toast.success(`Data ID: ${DataName} Updated!`)
                        retrieve()
                        closeModal()
                    }else{
                        toast.error(response.message ?? "Something went wrong!")
                    }
                })

            }
            const DeleteData = (item) => {
                if(confirm(`Delete Product ${item.name}?`)){     
                DMLProfiles({id:item.id},"DELETE") 
                .then(response=>{
                    
            
                    if(response.ok){
                        toast.success(`Data: ${item.name} Deleted!`)
                        retrieve()
                        closeModal()
                    }else{
                        toast.error(response.message ?? "Something went wrong!")
                    }
                })
                }
            }



    return (

        <Box sx={{flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', gap: 2}}>
            <Box m={5}>
                <Typography variant="h2" textAlign='center'>
                    Data Management
                </Typography>
            </Box>
            <Box sx={{flex: 1, p: 8}}>
                
                <CustomModal
                    buttonText="Add" 
                    open ={open}  
                    handleOpen={() => openModal ("add",null )} 
                    handleClose={() => closeModal ()}

                > 
                    
                    <Typography 
                        variant ="h3" 
                        bgcolor="black"
                        sx={{flex: 1, textAlign:'center', color:'white', p: 2, width: '100%'}}  
                    >
                        {editMode ? `Update Profile of ${selectedData.name}`:"Add Data"}
                        
                    </Typography>
                    {/* content of Modal */}
                    <Box sx ={{flex: 1, display:'flex', flexDirection:'column', width:'100vh', bgcolor: 'white', gap: 2}}>
                        <TextField
                            fullWidth
                            id="DataName"
                            label="Name"
                            variant="outlined"
                            sx={{flex: 1}}
                            defaultValue={selectedData.name ?? ''}
                        />

                        <TextField
                            fullWidth
                            id="DataUserName"
                            label="UserName"
                            variant="outlined"
                            sx={{flex: 1}}
                            defaultValue={selectedData.username ?? ''}
                        />
                        <TextField
                            fullWidth
                            id="DataUserPass"
                            label="Password"
                            variant="outlined"
                            sx={{flex: 1}}
                            defaultValue={selectedData.password ?? ''}
                        />
                        
                    </Box>
                    
                    {/* footer of Modal */}
                    <Box sx={{flex: 1, display:'flex', flexDirection:'row', alignItems: 'center',  justifyContent:'center', width: '100%'}}>
                        <Button fullWidth 
                        sx={{flex: 1, color: 'black', p: 2, fontSize:'16pt'}} 
                        variant="contained"
                        color={ editMode ? "primary":"success"}
                        onClick={() => editMode ? UpdateData() : AddData()}
                        >
                            {editMode ? "Update" : "Add"}
                            
                        </Button>

                    </Box>
                </CustomModal>
                
                


                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination:{
                            paginationModel:{
                                pageSize: 10
                            }
                        }
                    }}
                    pageSizeOptions={[10, 20, 30, 50, 100]}
                    disableRowSelectionOnClick
                    disableColumnResize
                    disableAutosize
                />
            </Box>
        </Box>
    )
}

export default Profiles