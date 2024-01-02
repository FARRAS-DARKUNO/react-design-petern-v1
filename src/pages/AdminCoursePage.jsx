
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useGetAdminCourse } from '../hooks/useGetAdminCourse';


const AdminCoursePage = () => {
    const { isLoading, actionLoading, data, updateStatus } = useGetAdminCourse()

    if (isLoading) {
        return <><h1>LOADING</h1></>
    }

    return (
        <>
            <Link to="../add-course">
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginBottom: '16px' }}
                >
                    Add Course
                </Button>
            </Link>
            <TableContainer component={Paper}>
                <Table sx={{ pb: 15, minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Title</TableCell>
                            <TableCell align="center">Deskripsi</TableCell>
                            <TableCell align="center">Harga</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Action</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map((value) => {
                                return (
                                    <TableRow
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        key={value.id}
                                    >
                                        <TableCell align="center" component="th" scope="row">
                                            {value.name}
                                        </TableCell>
                                        <TableCell align="center"> {value.description}</TableCell>
                                        <TableCell align="center">IDR {value.price}</TableCell>
                                        <TableCell align="center">
                                            {value.isActive ? "Aktif" : "Tidak Aktif"}
                                        </TableCell>
                                        <TableCell align="center">
                                            <Link to={`../edit-cource/${value.id}`}>
                                                <Button variant="contained">Edit</Button>
                                            </Link>
                                        </TableCell>
                                        <TableCell align="center">

                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                onClick={() => updateStatus(!value.isActive, value.id)}
                                            >
                                                {
                                                    actionLoading ? "Loading" :
                                                        value.isActive ? "Non Aktifkan" : "Aktifkan"
                                                }
                                            </Button>

                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }


                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default AdminCoursePage