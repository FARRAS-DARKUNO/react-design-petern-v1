
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useGetAdminUser } from '../hooks/useGetAdminUser';

const AdminUserPage = () => {
    const { actionLoading, data, isLoading, updateStatus } = useGetAdminUser()

    if (isLoading) {
        return <h1>LOADING ...</h1>
    }
    return (
        <div>
            <Link to="../add-user">
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginBottom: '16px' }}
                >
                    Tambah User
                </Button>
            </Link>
            <TableContainer component={Paper}>
                <Table sx={{ pb: 15, minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Username</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Action</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map(value => {
                                return (
                                    <TableRow
                                        key={value.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="center" component="th" scope="row">
                                            {value.name}
                                        </TableCell>
                                        <TableCell align="center">{value.email}</TableCell>
                                        <TableCell align="center">
                                            {value.isActive ? "Aktive" : "Non Aktive"}
                                        </TableCell>
                                        <TableCell align="center">
                                            <Link to={`../edit-user/${value.id}`}>
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
        </div>
    )
}
export default AdminUserPage