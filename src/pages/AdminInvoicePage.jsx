import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useGetAdminInvoice } from '../hooks/useGetAdminInvoice';
import FlatButtonForm from '../components/button/FlatButtonForm';
import { useNavigate } from 'react-router-dom';
import { convertTime } from '../utils/moment';

const AdminInvoicePage = () => {
    const { data, isLoading } = useGetAdminInvoice()
    const navigate = useNavigate()

    if (isLoading) {
        return <h1>Loading ...</h1>
    }
    return (
        <div>

            <TableContainer component={Paper}>
                <Table sx={{ pb: 15, minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">No Invoice</TableCell>
                            <TableCell align="center">Tanggal</TableCell>
                            <TableCell align="center">Total Harga</TableCell>
                            <TableCell align="center">Total Produk</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map(value => {
                                return (
                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={value.id}>
                                        <TableCell align="center" component="th" scope="row">
                                            {value.invoiceNumber}
                                        </TableCell>
                                        <TableCell align="center">{convertTime(value.createdAt)}</TableCell>
                                        <TableCell align="center">RP {value.totalPrice}</TableCell>
                                        <TableCell align="center"> {value.totalProduct}</TableCell>
                                        <TableCell align="center"><FlatButtonForm title='Detail' action={() => navigate(`/admin/admin-detail-invoice/${value.invoiceNumber}`)} /></TableCell>

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
export default AdminInvoicePage