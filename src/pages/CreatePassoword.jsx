import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import BorderButtomForm from "../components/button/BorderButtomForm";
import FlatButtonForm from "../components/button/FlatButtonForm";
import { brownColor } from '../utils/color'
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const CreatePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigate()

  const { CreateNewPass, isLoading } = useAuth()

  const submitCreate = async (e) => {
    e.preventDefault()
    const currentURL = window.location.href;
    const url = new URL(currentURL);
    const email = url.searchParams.get('email');
    const token = url.searchParams.get('token');
    console.log('Email:', email);
    console.log('Token:', token);

    if (!isLoading) {
      if (password != confirmPassword) {
        alert("Periksa kembali Password")
      } else {
        CreateNewPass(email, password, token)
      }
    }

  };

  const handleCancle = () => {
    navigation("/login")
  }

  return (
    <Container maxWidth="sm">
      <Stack
        justifyContent={'center'}
        alignItems={'center'}
        height={`calc(100vh - 68px)`}
        width={"100%"}
        marginTop={'68px'}
      >
        <Box gap={"60px"}>
          <Typography color={brownColor} variant="h6">
            Create Password
          </Typography>
          <form onSubmit={submitCreate}>
            <TextField
              fullWidth
              required
              label="New Password"
              variant="outlined"
              margin="normal"
              onChange={e => setPassword(e.target.value)}
              value={password}
              type="password"
            />
            <TextField
              fullWidth
              required
              label="Confirm New Password"
              variant="outlined"
              margin="normal"
              onChange={e => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              type="password"
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "40px",
              }}
            >
              <BorderButtomForm action={handleCancle} title={"Cancle"} />
              <FlatButtonForm title={isLoading ? "Loading" :"Submit"} />
            </Box>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default CreatePassword