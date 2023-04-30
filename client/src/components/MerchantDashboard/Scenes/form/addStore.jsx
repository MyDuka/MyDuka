import React, {useState} from 'react'
import {Box, Button, TextField, Typography, useMediaQuery} from "@mui/material";
import useMediaquery from "@mui/material/useMediaQuery";
import Header from '../../../Header';
import axios from 'axios'


const AddStore = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [location, setLocation] = useState("")
    const [store, setStore] = useState()
    const [created, setCreated] = useState(false)





    const id = sessionStorage.getItem('merchant_id')


    function handleSubmit(e){
        e.preventDefault();
        // const user_id = sessionStorage.getItem('user_id')
        axios.post(`http://127.0.0.1:3000/add/store/${id}`,{
            name,
            address,
            location
        })
        .then((response)=>{
            setStore(response.data)
            setName("")
            setAddress("")
            setLocation("")
            setCreated(true)
        })
        .catch(error=>console.log(error))

    }


  

    return (
      <Box m="20px" >
        <Header title="Add New Store" subtitle="Add a new store for your franchise" />
  

            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
                p="25px"
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="store name"
                  onChange={(e)=>setName(e.target.value)}
                  value={name}
                  name="name"
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Address"
                  onChange={(e)=> setAddress(e.target.value)}
                  value={address}
                  name="Address"
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="location"
                  onChange={(e)=> setLocation(e.target.value)}
                  value={location}
                  name="location"
                  sx={{ gridColumn: "span 2" }}
                />
              </Box>
              <Box display="flex" justifyContent="end" mt="10px" mr="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Add Store
                </Button>
              </Box>
            </form>

        <Typography display="flex" justifyContent="center" mt="10px" mr="20px">{created ? `Administrator ${store.name} has been added` : null}</Typography>


       
      </Box>
    );
  };
  

export default AddStore;