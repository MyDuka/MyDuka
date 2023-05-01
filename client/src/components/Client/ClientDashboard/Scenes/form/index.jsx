import React, {useState} from 'react'
import {Box, Button, TextField, useMediaQuery} from "@mui/material";
import Header from '../../Header';
import axios from 'axios';

const ProductForm = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [image, setImage] = useState("")
    const [supplier, setSupplier] = useState("")
    const [buying_price, setBuying_price] = useState()
    const [selling_price, setSelling_price] = useState()
    const [store_id, setStore_id] = useState()
  
    const handleSubmit = (e) => {
      e.preventDefault()
      axios.post(`https://myduka.onrender.com/add/product/${store_id}`,{
        name,
        category,
        image,
        supplier,
        buying_price,
        selling_price
      })
      .then((response)=>{
        console.log(response)
        setName("")
        setCategory("")
        setBuying_price(0)
        setSelling_price(0)
        setSupplier("")
        setImage("")
        setStore_id()
      })

    };
  
    return (
      <Box m="20px" >
        <Header title="Add New Product" subtitle="Product Details" />
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
                  type="number"
                  label="Store Id"
                  value={store_id}
                  onChange={(e)=> setStore_id(e.target.value)}   
                  name="storeId"
                  sx={{ gridColumn: "span 4" }}
                 
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Product Name"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}   
                  name="productName"
                  sx={{ gridColumn: "span 4" }}
                 
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Product Type"
                  onChange={(e)=>setCategory(e.target.value)}
                  value={category}
                  name="productType"
                  sx={{ gridColumn: "span 4" }}
            
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Buying Price"
                  onChange={(e)=>setBuying_price(e.target.value)}
                  value={buying_price}
                  name="buyingPrice"
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Selling Price"
                  onChange={(e)=>setSelling_price(e.target.value)}
                  value={selling_price}
                  name="sellingPrice"
                  sx={{ gridColumn: "span 2" }}
                />
                 <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="supplier"
                  onChange={(e)=>setSupplier(e.target.value)}
                  value={supplier}
                  name="sellingPrice"
                  sx={{ gridColumn: "span 2" }}
                />
                   <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Insert ImageUrl"
                  onChange={(e)=>setImage(e.target.value)}
                  value={image}
                  name="imageURL"
                  sx={{ gridColumn: "span 4" }}
                />
              </Box>
              <Box display="flex" justifyContent="end" mt="10px" mr="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Add Product 
                </Button>
              </Box>
            </form>
      </Box>
    );
  };

export default ProductForm;