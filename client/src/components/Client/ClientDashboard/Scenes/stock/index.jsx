import React, {useState} from 'react'
import {Box, Button, ButtonGroup, Typography, TextField, Input} from "@mui/material";
import Header from '../../Header'
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
// Select imports
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { CallReceivedTwoTone } from '@mui/icons-material';
import Select from '@mui/material/Select';
import axios from 'axios';


// const options = ['Paid', 'Unpaid'];


const StockForm = () => {

    const [payment_status, setPayment_status] = useState()
    const [product, setProduct] = useState()
    const [received, setReceived] = useState()
    const [stocked, setStocked] = useState()
    const [spoilt, setSpoilt] = useState()
    const [supplier, setSupplier] = useState()
    const [payment, setPayment] = useState("")
  
    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post(`https://myduka.onrender.com/received/items/${product}`,{
        payment_status,
        received,
        stocked,
        spoilt
      })
      .then((response)=>{
        console.log(response.data)
      })
    };
  
    return (
      <Box m="20px" >
        <Header title="ADD STOCK" subtitle="Stock Details" />
  
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                gridColumn:"span 4" 
                }}
                p="25px"
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Product ID"
                  onChange={(e)=> setProduct(e.target.value)}
                  value={product}
                  name="productName"
                  sx={{ gridColumn: "span 4" }}
                />
               
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Number of items  to supplied"
                  onChange={(e)=> setReceived(e.target.value)}
                  value={received}
                  name="itemsSupplied"
                  sx={{ gridColumn: "span 2" }}
                  // contact
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Items in Stock"
                  onChange={(e)=>setStocked(e.target.value)}
                  value={stocked}
                  name="inStock"
                  sx={{ gridColumn: "span 2" }}
                  // address 1
                />
                <TextField
                  fullWidth
                  variant="filled"
                  label="Number of Spoilt Goods"
                  type="number"
                  onChange={(e)=>setSpoilt(e.target.value)}
                  value={spoilt}
                  name="spoilt"
                  sx={{ gridColumn: "span 4" }}

                />
                <br/>
                
                  <Button variant="contained" onClick={()=>setPayment_status(0)}>PAID</Button>
                   <Button variant="contained"  onClick={()=>setPayment_status(1)} >UNPAID</Button>

               
                
              
                <br />
                
              </Box>      
            



              <Box display="flex" justifyContent="end" mt="10px" mr="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Add Stock
                </Button>
              </Box>
            </form>
  
      </Box>
    );
  };


export default StockForm