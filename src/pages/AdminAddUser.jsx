import { useState } from 'react';
import {
    TextField,
    Button,
    Box,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Typography,
} from '@mui/material';
import { useCreateAdminUser } from '../hooks/useCreateAdminUser';

const AdminAddUser = () => {
    const { isLoading, registerAdmin } = useCreateAdminUser()

    const [username, setUsername] = useState('');
    const [passowrd, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const kategoriRole = ['USER', "ADMIN"]


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isLoading) {
            registerAdmin(username, email, passowrd, role)
        }

    };
    return (
        <Box p={3}>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <Typography variant='h5' marginBottom={'14px'}>Create User</Typography>
                <TextField
                    label="Name"
                    required
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Password"
                    required
                    variant="outlined"
                    color="secondary"
                    type='password'
                    fullWidth
                    value={passowrd}
                    onChange={(e) => setPassword(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Email"
                    required
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel id="kategori-label">Role</InputLabel>
                    <Select
                        labelId="kategori-label"
                        id="kategori"
                        value={role}
                        label="Kategori"
                        onChange={(e) => setRole(e.target.value)}
                    >
                        {kategoriRole.map((kategori) => (
                            <MenuItem key={kategori} value={kategori}>
                                {kategori}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    style={{ marginTop: '16px' }}
                >
                    {isLoading ? "Loading" : "Save"}
                </Button>
            </form>
        </Box>
    )
}
export default AdminAddUser