import { useState } from 'react';
import {
    TextField,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio,
    Box,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Typography,
} from '@mui/material';
import { useCreateAdminCourse } from '../hooks/useCreateAdminCourse';

const AdminAddCourse = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [imagePath, setImagePath] = useState('');
    const [isActive, setIsActive] = useState(true);

    const [showImage, setShowImage] = useState(null);

    const { isLoading, category, actionLoading, createCourse } = useCreateAdminCourse()

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setShowImage(imageUrl)
            setImagePath(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!actionLoading) {
            createCourse(title, description, categoryId, price, imagePath, isActive)
        }

    };

    if (isLoading) {
        return <h1>LOADING ...</h1>
    }
    return (
        <Box p={3}>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <Typography variant='h5' marginBottom={'14px'}>Create Course</Typography>
                <TextField
                    label="Title"
                    required
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Description"
                    required
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <TextField
                    label="Price"
                    required
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel id="kategori-label">Kategori</InputLabel>
                    <Select
                        labelId="kategori-label"
                        id="kategori"
                        value={categoryId}
                        label="Kategori"
                        onChange={(e) => setCategoryId(e.target.value)}
                    >
                        {category.map((kategori) => (
                            <MenuItem key={kategori.id} value={kategori.id}>
                                {kategori.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Box sx={{ mt: 3 }}>
                    <Box>
                        <Box
                            component="img"
                            sx={{ height: '140px', display: showImage == null ? 'none' : 'block' }}
                            src={showImage}
                        />
                    </Box>
                    <TextField
                        type="file"
                        inputProps={{ accept: 'image/*' }}
                        onChange={handleImageChange}
                    />
                </Box>

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
                    {actionLoading ? "Loading" : "Save"}
                </Button>
            </form>
        </Box>
    )
}
export default AdminAddCourse