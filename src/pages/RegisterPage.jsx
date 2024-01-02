import { useState } from "react";
import { Typography, Container, Box, TextField } from "@mui/material";
import FlatButtonForm from "../components/button/FlatButtonForm";
import { brownColor, blueColor } from '../utils/color'
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function RegisterPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const { register, isLoading } = useAuth()

    const submitRegister = async (e) => {
        e.preventDefault()
        console.log(email + password + name + confirmPassword)

        if (!isLoading) {
            if (password != confirmPassword) {
                alert("Password tidak sama")
            } else {
                register(name, email, password)
            }
        }

    }

    return (
        <Container maxWidth="sm">
            <Box marginTop={"150px"} gap={"60px"}>
                <Typography color={brownColor} variant="h6">
                    Are you ready become a professional cheff?
                </Typography>
                <Typography variant="caption" marginBottom={"20px"} color={brownColor}>
                    Please register first
                </Typography>
                <form onSubmit={submitRegister}>
                    <TextField
                        fullWidth
                        required
                        label="Name"
                        variant="outlined"
                        margin="normal"
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                    <TextField
                        fullWidth
                        required
                        label="Email"
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
                    <TextField
                        fullWidth
                        required
                        label="Confirm Password"
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
                        }}
                    >
                        <FlatButtonForm title={isLoading ? "Loading" : "Sign Up"} />
                    </Box>
                </form>

                <Box>
                    <Typography variant="caption" display="flex" gutterBottom justifyContent={"center"} sx={{
                        color: brownColor,
                        marginTop: '30px'
                    }}>
                        Have account?
                        <Link style={{ textDecoration: 'none' }} to={'/login'}>
                            <Typography variant="caption" sx={{
                                color: blueColor
                            }}>
                                Login here
                            </Typography>
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Container>

    );
}

export default RegisterPage;