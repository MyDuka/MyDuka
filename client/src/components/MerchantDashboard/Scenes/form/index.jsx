import React, {useState} from 'react'
import {Box, Button, TextField, Typography, useMediaQuery} from "@mui/material";
import useMediaquery from "@mui/material/useMediaQuery";
import Header from '../../../Header';


const Form = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");


  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [contact, setContact] = useState("")
  // const [address, setAddress] = useState("")
  // const [lastName, setLastName] = useState("")
  const [createdAdmin, setCreatedAdmin] = useState()
  const [created, setCreated] = useState(false)



const id = sessionStorage.getItem('merchant_id')


function handleSubmit(e){
  e.preventDefault();
  // const user_id = sessionStorage.getItem('user_id')
  fetch(`http://localhost:3000/admin/register/${id}`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
        contact: contact
  })
})
  .then(r=> r.json())
  .then(data=> {
    console.log(data)
    setCreatedAdmin(data)
    setCreated(true)
    setPassword("")
    setContact("")
    setEmail("")
    setUsername("")
  })
  .catch(error=>console.log(error))

}


  

    return (
      <Box m="20px" >
        <Header title="Create Admin Profile" subtitle="Create a New Admin Profile" />
  

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
                  label="Username"
                  onChange={(e)=>setUsername(e.target.value)}
                  value={username}
                  name="username"
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Email"
                  onChange={(e)=> setEmail(e.target.value)}
                  value={email}
                  name="email"
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Contact"
                  onChange={(e)=> setContact(e.target.value)}
                  value={email}
                  name="contact"
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Initial password"
                  onChange={(e)=>setPassword(e.target.value)}
                  value={password}
                  name="password"
                  sx={{ gridColumn: "span 2" }}
                />
              </Box>
              <Box display="flex" justifyContent="end" mt="10px" mr="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Create New Admin 
                </Button>
              </Box>
            </form>

        <Typography display="flex" justifyContent="center" mt="10px" mr="20px">{created ? `Administrator ${createdAdmin.username} has been added` : null}</Typography>

       
      </Box>
    );
  };
  

export default Form