import { TextField } from "@mui/material"
import {Box} from "@mui/material"
import Button from '@mui/material/Button';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function FirstPage() {
  const navigate = useNavigate();
  const [name, setName] = useState<string>();
  const [number, setNumber] = useState<string>();
  const [email, setEmail] = useState<string>();

  const getData = () => {
    if (name && number && email) {
    console.log(name, number, email);
    localStorage.setItem('items', JSON.stringify({name,number,email}));
    navigate('/second');
    }
    else{
        alert("Please fill all the fields");
        navigate('/');
    }
  }
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Box
        height="full"
        width="full"
        my={4}
        display="flex"
        alignItems="center"
        gap={4}
        p={2}
        sx={{
          border: "2px solid grey",
          flexDirection: "column",
          borderRadius: "10px",
          padding:"40px 60px",
          boxShadow: "0px 0px 10px 0px #00000029",
        }}
      >
        <TextField
          id="outlined-basic"
          label="Enter your name"
          variant="standard"
          helperText="Enter a full name"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Enter phone number"
          variant="standard"
          helperText="Enter 10 digit Phone Number"
          onChange={(e) => setNumber(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Enter email id"
          variant="standard"
          helperText="enter valid email id"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
        color="secondary"
        variant="contained"
        onClick={getData}
        >Submit</Button>
      </Box>
    </Box>
  );
}

export default FirstPage;
