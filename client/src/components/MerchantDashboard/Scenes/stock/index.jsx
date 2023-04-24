import React from 'react'
import {Box, Button, ButtonGroup, TextField, useMediaQuery} from "@mui/material";
import {Formik} from "formik";
import * as yup from "yup";
import useMediaquery from "@mui/material/useMediaQuery";
import Header from '../../../Header';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
// Select imports
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';



const options = ['Paid', 'Unpaid'];
const options2 =['Spoilt', 'Not Spoilt']

const StockForm = () => {

  
    // Input stuff
 
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');

    const isNonMobile = useMediaQuery("(min-width:600px)");
  
    const handleFormSubmit = (values) => {
      console.log(values);
    };
  
    return (
      <Box m="20px" >
        <Header title="ADD STOCK" subtitle="Stock Details" />
  
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            value,
            stateValue,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
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
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.productName}
                  name="productName"
                  error={!!touched.productName && !!errors.productName}
                  helperText={touched.productName && errors.productName}
                  sx={{ gridColumn: "span 4" }}
                  // First Name
                />
               
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Number of items supplied"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.itemsSupplied}
                  name="itemsSupplied"
                  error={!!touched.itemsSupplied && !!errors.itemsSupplied}
                  helperText={touched.itemsSupplied && errors.itemsSupplied}
                  sx={{ gridColumn: "span 2" }}
                  // contact
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Items in Stock"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.inStock}
                  name="inStock"
                  error={!!touched.inStock && !!errors.inStock}
                  helperText={touched.inStock && errors.inStock}
                  sx={{ gridColumn: "span 2" }}
                  // address 1
                />
                <br/>
                Spoilt Goods
                <TextField
                  id="outlined-number"
                  label="Number of Spoilt Goods"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <br/>
                        
                        
            {/* <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
                <div>{`inputValue: '${inputValue}'`}</div> */}
                Payment Status
                <br />
                <Autocomplete
                    value={value}
                    onChange={(event, newValue) => {
                    setValue(newValue);
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                    }}
                    id="controllable-states-demo"
                    options={options}
                    error={!!touched.inStock && !!errors.inStock}
                    helperText={touched.inStock && errors.inStock}
                    sx={{ width: 150 }}
                    renderInput={(params) => <TextField {...params} label="Payment Status" />}
                />
                
            
              </Box>
              <Box display="flex" justifyContent="end" mt="10px" mr="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Add Stock
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    );
  };

  const checkoutSchema = yup.object().shape({
    productName: yup.string().required("required"),
    paymentStatus: yup.string().required("required"),
    itemsSupplied: yup.string().required("required"),
    inStock: yup.string().required("required"),
    // productStatus: yup.string().required("required"),
    

  });
  const initialValues = {
    productName: "",
    paymentStatus: "",
    itemsSupplied: "",
    inStock:"",
    // productStatus:""
    

  };

export default StockForm