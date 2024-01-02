import { Box, Container, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { brownColor } from '../utils/color'
import BorderButtomForm from "../components/button/BorderButtomForm";
import FlatButtonForm from "../components/button/FlatButtonForm";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const { ForgetPassword, isLoading } = useAuth()

  const navigate = useNavigate()


  const submitReset = async (e) => {
    e.preventDefault()
    console.log(email)
    if (!isLoading) {
      ForgetPassword(email)
    }
  };

  const handleCancle = () => {
    navigate("/login")
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
            Reset Password
          </Typography>
          <Typography variant="caption" marginBottom={"20px"} color={brownColor} >
            Send OTP code to your email address
          </Typography>

          <form onSubmit={submitReset}>
            <TextField
              fullWidth
              required
              label="Email Address"
              variant="outlined"
              margin="normal"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "40px",
                width: '400px'
              }}
            >
              <BorderButtomForm action={handleCancle} title={"Cancle"} />
              <FlatButtonForm title={isLoading ? "Loading" : "Confirm"} />
            </Box>
          </form>
        </Box>
      </Stack>
    </Container>
  );
};

export default ForgetPassword