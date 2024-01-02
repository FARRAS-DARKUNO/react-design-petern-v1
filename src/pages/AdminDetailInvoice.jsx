import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useGetDetailInvoice } from '../hooks/useGetDetailInvoice';
import { useParams } from 'react-router-dom';
import { convertTime } from '../utils/moment';

const AdminDetailInvoice = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetDetailInvoice(id)

    if (isLoading) {
        return <h1>Loading ...</h1>
    }
    return (
        <div>

            <TableContainer component={Paper}>
                <Table sx={{ pb: 15, minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Course Name</TableCell>
                            <TableCell align="center">Category</TableCell>
                            <TableCell align="center">Schedule</TableCell>
                            <TableCell align="center">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.listInvoice.map(value => {
                                return (
                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={value.id}>
                                        <TableCell align="center" component="th" scope="row">
                                            {value.name}
                                        </TableCell>
                                        <TableCell align="center">{value.category}</TableCell>
                                        <TableCell align="center">{convertTime(value.shedule)}</TableCell>
                                        <TableCell align="center"> {value.price}</TableCell>

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
export default AdminDetailInvoice