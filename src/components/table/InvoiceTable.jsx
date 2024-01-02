import {
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import FlatButtonForm from '../button/FlatButtonForm'
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { convertTime } from '../../utils/moment';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#5B4947",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



const InvoiceTable = (Props) => {

    const navigate = useNavigate();

    const gotoDetail = (numberInvoice) => {
        navigate(`/detail-invoice/${numberInvoice}`)
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 0 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell >No</StyledTableCell>
                        <StyledTableCell align="left">No Invoice</StyledTableCell>
                        <StyledTableCell align="center">Date</StyledTableCell>
                        <StyledTableCell align="center">Total Price</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Props.rows.map((row, index) => (
                        <StyledTableRow key={row.index}>
                            <StyledTableCell component="th" scope="row">
                                {index + 1}
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.invoiceNumber}</StyledTableCell>
                            <StyledTableCell align="center">{convertTime(row.createdAt)}</StyledTableCell>
                            <StyledTableCell align="center">{row.totalPrice}</StyledTableCell>
                            <StyledTableCell align="center">
                                <FlatButtonForm title={"Detail"} action={() => gotoDetail(row.invoiceNumber)} />
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

InvoiceTable.propTypes = { 
    rows: PropTypes.array.isRequired
}

export default InvoiceTable