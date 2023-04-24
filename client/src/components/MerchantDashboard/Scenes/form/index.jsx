import React from 'react'
import {Box, Button, TextField, useMediaQuery} from "@mui/material";
import {Formik} from "formik";
import * as yup from "yup";
import useMediaquery from "@mui/material/useMediaQuery";
import Header from '../../../Header';


const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
  
    const handleFormSubmit = (values) => {
      console.log(values);
    };
  
    return (
      <Box m="20px" >
        <Header title="ADD NEW PRODUCT" subtitle="Product Details" />
  
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
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
                  label="Product Type"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.productType}
                  name="productType"
                  error={!!touched.productType && !!errors.productType}
                  helperText={touched.productType && errors.productType}
                  sx={{ gridColumn: "span 4" }}
                  // Second Name
                />
                {/* <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Product Status"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.productStatus}
                  name="productStatus"
                  error={!!touched.productStatus && !!errors.productStatus}
                  helperText={touched.productStatus && errors.productStatus}
                  sx={{ gridColumn: "span 2" }}
                  // email
                /> */}
                {/* <TextField
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
                  sx={{ gridColumn: "span 4" }}
                  // contact
                /> */}
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Buying Price"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.buyingPrice}
                  name="buyingPrice"
                  error={!!touched.buyingPrice && !!errors.buyingPrice}
                  helperText={touched.buyingPrice && errors.buyingPrice}
                  sx={{ gridColumn: "span 2" }}
                  // address 1
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Selling Price"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.sellingPrice}
                  name="sellingPrice"
                  error={!!touched.sellingPrice && !!errors.sellingPrice}
                  helperText={touched.sellingPrice && errors.sellingPrice}
                  sx={{ gridColumn: "span 2" }}
                  // address 2
                />
                   <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Insert ImageUrl"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.image}
                  name="imageURL"
                  error={!!touched.imageURL && !!errors.imageURL}
                  helperText={touched.imageURL && errors.imageURL}
                  sx={{ gridColumn: "span 4" }}
                />
              </Box>
              <Box display="flex" justifyContent="end" mt="10px" mr="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Add Product 
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
    productType: yup.string().required("required"),
    productStatus: yup.string().required("required"),
    itemsSupplied: yup.string().required("required"),
    buyingPrice: yup.string().required("required"),
    sellingPrice: yup.string().required("required"),
    imageURL: yup.string().required("required"),


  });
  const initialValues = {
    productName: "",
    productType: "",
    productStatus: "",
    itemsSupplied: "",
    buyingPrice: "",
    sellingPrice: "",
    imageURL:""
  };

export default Form