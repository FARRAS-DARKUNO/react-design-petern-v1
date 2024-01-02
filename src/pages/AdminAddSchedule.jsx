import { useEffect, useState } from 'react';
import {
    TextField,
    Button,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Box,
} from '@mui/material';
import { useGetAdminCourse } from '../hooks/useGetAdminCourse';
import { useCreateAdminSchedule } from '../hooks/useCreateAdminSchedule';

const AdminAddSchedule = () => {

    const { data, isLoading } = useGetAdminCourse()
    const { actionLoading, createSchedule } = useCreateAdminSchedule()

    const [schedule, setSchedule] = useState('');
    const [courseFK, setCourseFK] = useState('');
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        if (!isLoading) {
            setCourses(data)
        }
    }, [isLoading, data])

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!actionLoading) {
            createSchedule(schedule, courseFK)
        }

    };
    if (isLoading) {
        return <h1>Loading ...</h1>
    }
    return (
        <Box p={3}>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <Typography variant='h5' marginBottom={'14px'}>Create Schedule</Typography>

                <TextField
                    label="Tanggal"
                    required
                    variant="outlined"
                    color="secondary"
                    type="datetime-local"
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={schedule}
                    onChange={(e) => setSchedule(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
                    <InputLabel id="courseFK-label">Course</InputLabel>
                    <Select
                        labelId="courseFK-label"
                        label="Course"
                        value={courseFK}
                        onChange={(e) => setCourseFK(e.target.value)}
                    >
                        {courses.map((course) => (
                            <MenuItem key={course.id} value={course.id}>
                                {course.name}
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
                    {actionLoading ? "Loading" : 'Save'}
                </Button>
            </form>
        </Box>
    )
}

export default AdminAddSchedule