import { useState } from 'react';
import {
    TextField,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio,
    Box,
    Typography,
} from '@mui/material';
import { useCreateAdminCategory } from '../hooks/useCreateAdminCategory';

const AdminAddCategory = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imagePath, setImagePath] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [showImage, setShowImage] = useState(null);

    const { createCategory, isLoading } = useCreateAdminCategory()

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

        if (!isLoading) {
            createCategory(title, description, imagePath, isActive)
        }
    };

    return (
        <Box p={3}>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <Typography variant='h5' marginBottom={'14px'}>Create Category</Typography>
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
                    {isLoading ? "Loading" : "Save"}
                </Button>
            </form>
        </Box>
    )
}
export default AdminAddCategory