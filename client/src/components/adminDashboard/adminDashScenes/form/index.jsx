import { Box, Button, TextField } from "@mui/material";
// import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../adminDashComponents/Header";
import { useState } from "react";
import axios from 'axios';

const AdminForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  // const [contact, setContact] = useState("")
  // const [address, setAddress] = useState("")
  // const [lastName, setLastName] = useState("")

  const handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:3000/users/login', {
  username: username,
  email: email,
})
.then(response => {
  console.log(response);
  // do something with the response, such as saving the user information
  if (response.status === 200) {
    console.log(response);
    return response
  }
})


  
    .catch(error => {
      console.log(error);
 
    });
  }


  return (
    <Box m="20px">
      <Header title="Create Clerk" subtitle="Create a New Clerk Profile" />
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="username"
                onChange={(e)=> setUsername(e.target.value)}
                value={username}
                name="firstName"
                sx={{ gridColumn: "span 2" }}
              />
              {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              /> */}
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
                name="email"
                // error={!!touched.email && !!errors.email}
                // helperText={touched.email && errors.email}
                // sx={{ gridColumn: "span 4" }}
              />
              {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contact}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              /> */}
              {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onChange={(e)=> setAddress(e.target.value)}
                value={address}
                name="address"
                sx={{ gridColumn: "span 4" }}
              /> */}
              {/* <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address 2"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              /> */}
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Clerk
              </Button>
            </Box>
          </form>
    </Box>
  );
};

export default AdminForm;
