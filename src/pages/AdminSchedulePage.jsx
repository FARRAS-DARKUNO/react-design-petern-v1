
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useGetAdminSchedule } from '../hooks/useGetAdminSchedule';
import { convertTime } from '../utils/moment';

const AdminSchedulePage = () => {
    const { data, isLoading } = useGetAdminSchedule()

    if (isLoading) {
        return <h1>Loading ...</h1>
    }
    return (
        <div>
            <Link to="../add-schedule ">
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginBottom: '16px' }}
                >
                    Add Schedule Method
                </Button>
            </Link>
            <TableContainer component={Paper}>
                <Table sx={{ pb: 15, minWidth: 650 }} aria-label="schedule table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Tanggal</TableCell>
                            <TableCell align="center">Course ID</TableCell>
                            <TableCell align="center">Title</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map(value => {
                                return (
                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={value.id}>
                                        <TableCell align="center" component="th" scope="row">
                                            {convertTime(value.date)}
                                        </TableCell>
                                        <TableCell align="center">{value.id}</TableCell>
                                        <TableCell align="center">
                                            {value.titleProduct}
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
export default AdminSchedulePage