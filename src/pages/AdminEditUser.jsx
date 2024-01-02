import { useEffect, useState } from 'react';
import {
    TextField,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio,
    Box,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem
} from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetAdminEditUser } from '../hooks/useGetAdminEditUser';
import { useCreateAdminUser } from '../hooks/useCreateAdminUser';

const AdminEditUser = () => {
    const { id } = useParams()
    const { data, isLoadingUser } = useGetAdminEditUser(id)
    const { isLoading, updateDataUser } = useCreateAdminUser()

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [role, setRole] = useState('');
    const kategoriRole = ['USER', "ADMIN"];

    useEffect(() => {
        if (!isLoadingUser) {
            setEmail(data.email)
            setUsername(data.name)
            setIsActive(data.isActive)
            setRole(data.role)
        }
    }, [isLoadingUser, data])


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isLoading) {
            updateDataUser(id, username, email, role, isActive)
        }

    };

    if (isLoadingUser) {
        return <h1>Loading ...</h1>
    }
    return (
        <Box p={3}>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <Typography variant='h5' marginBottom={'14px'}>Edit User</Typography>
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

                <Box marginTop={'16px'} >
                    <RadioGroup
                        row
                        name="status"
                        value={isActive}
                        onChange={(e) => setIsActive(e.target.value === 'true')}
                    >
                        <FormControlLabel
                            value="true"
                            control={<Radio color="primary" />}
                            label="Aktif"
                        />
                        <FormControlLabel
                            value="false"
                            control={<Radio color="primary" />}
                            label="Tidak Aktif"
                        />
                    </RadioGroup>
                </Box>
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
export default AdminEditUser