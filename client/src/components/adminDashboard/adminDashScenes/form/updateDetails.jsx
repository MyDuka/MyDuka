import { Box, Button, TextField } from "@mui/material";
// import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../adminDashComponents/Header";
import { useState } from "react";
import axios from 'axios';
import {Typography} from "@mui/material";

const AdminUpdateForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [contact, setContact] = useState("")
  const [address, setAddress] = useState("")
  const [image, setImage] = useState("")
  // const [lastName, setLastName] = useState("")

  const handleSubmit = event => {
    event.preventDefault();

    axios.post('http://localhost:3000/clerk/register', {
  username: username,
  contact: contact,
  password: password,
  address: address,
  image: image,

})
.then(response => {
  console.log(response);
  // do something with the response, such as saving the user information
  if (response.status === 200) {
    console.log(response.data);
    return response.data
  }
  setUsername("")
  setPassword("")
  setImage("")
  setContact("")
  setAddress("")
})


  
    .catch(error => {
      console.log(error);
 
    });
  }


  return (
    <Box m="20px">
      <Header title="Create Clerk" subtitle="Update your Profile" />
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
                label="image url"
                onChange={(e)=>setImage(e.target.value)}
                value={image}
                name="image"
                // error={!!touched.contact && !!errors.contact}
                // helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="username"
                onChange={(e)=> setUsername(e.target.value)}
                value={username}
                name="username"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact"
                onChange={(e)=>setContact(e.target.value)}
                value={contact}
                name="contact"
                // error={!!touched.contact && !!errors.contact}
                // helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                onChange={(e)=> setAddress(e.target.value)}
                value={address}
                name="address"
                sx={{ gridColumn: "span 4" }}
              />
              <Typography>Change Password</Typography>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="change password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                name="changePassword"
                // error={!!touched.address2 && !!errors.address2}
                // helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                save
              </Button>
            </Box>
          </form>
    </Box>
  );
};

export default AdminUpdateForm;
