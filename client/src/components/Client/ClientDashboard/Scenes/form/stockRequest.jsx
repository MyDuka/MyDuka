import React, {useState, useEffect} from 'react'
import {Box, Button, TextField, useMediaQuery} from "@mui/material";
import useMediaquery from "@mui/material/useMediaQuery";
import Header from '../../Header';
import axios from 'axios';



const StockRequest = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const [product, setProduct] = useState("")
    const [supplier, setSupplier] = useState("")
    const [quantity, setQuantity] = useState()
  
    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post("https://myduka.onrender.com/requests",{
        quantity,
        product,
        supplier,
      })
      .then((response)=>{
        console.log(response.data)
        setProduct("")
        setSupplier("")
        setQuantity(0)
      })

    };
  
    return (
      <Box m="20px" >
        <Header title="Send Stock Request" subtitle="Request Details" />
  

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
                  label="Product Name"
                  onChange={(e)=>setProduct(e.target.value)}
                  value={product}
                  name="productName"
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Product Quantity"
                  onChange={(e)=>setQuantity(e.target.value)}
                  value={quantity}
                  name="Quantity"
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Supplier"
                  onChange={(e)=>setSupplier(e.target.value)}
                  value={supplier}
                  name="Supplier"
                  sx={{ gridColumn: "span 4" }}
                />
              </Box>
              <Box display="flex" justifyContent="end" mt="10px" mr="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Send Request 
                </Button>
              </Box>
            </form>
    
       
      </Box>
    );
  };



export default StockRequest;