import { useState } from "react";
import {
    Typography,
    Container,
    Box, Stack,
    TextField
} from "@mui/material";
import FlatButtonForm from "../components/button/FlatButtonForm";
import { brownColor, blueColor } from '../utils/color'
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { isLoading, login } = useAuth()

    const submitLogin = async (e) => {
        e.preventDefault()

        console.log(email + password)

        if (!isLoading){
            login(email, password)
        }
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
                        Welcome Back! Cheff
                    </Typography>

                    <Typography variant="caption" marginBottom={"20px"} color={brownColor} >
                        Please login first
                    </Typography>

                    <form autoComplete="off" onSubmit={submitLogin}>
                        <TextField
                            fullWidth
                            required
                            label="Email Address"
                            variant="outlined"
                            margin="normal"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />

                        <TextField
                            fullWidth
                            required
                            label="Password"
                            variant="outlined"
                            margin="normal"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            type="password"
                        />


                        <Typography
                            variant="caption"
                            display="flex"
                            gutterBottom
                            justifyContent={"start"}
                            color={brownColor}
                            marginTop={'5px'}
                        >
                            Forgot Password?
                            <Link style={{ textDecoration: 'none' }} to={'/forget-password'}>
                                <Typography variant="caption" color={blueColor} >
                                    Click Here
                                </Typography>
                            </Link>
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                            }}
                        >
                            <FlatButtonForm title={isLoading ? "Loading" : "LOGIN"} />
                        </Box>
                    </form>

                    <Typography variant="caption" display="flex" justifyContent={"center"} color={brownColor} marginTop={'30px'} >
                        Dont have account?
                        <Link style={{ textDecoration: 'none' }} to={'/register'}>
                            <Typography variant="caption" color={blueColor} >
                                Sign Up here
                            </Typography>
                        </Link>
                    </Typography>
                </Box>
            </Stack>
        </Container>
    );
}

export default LoginPage;