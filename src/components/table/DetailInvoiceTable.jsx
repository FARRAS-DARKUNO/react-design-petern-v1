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



const DetailInvoiceTable = (Props) => {

    return (
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 0 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell >No</StyledTableCell>
                        <StyledTableCell align="left">Couse Name</StyledTableCell>
                        <StyledTableCell align="center">Category</StyledTableCell>
                        <StyledTableCell align="center">Schedule</StyledTableCell>
                        <StyledTableCell align="center">Price</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Props.rows.map((row, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell component="th" scope="row">
                                {index + 1}
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.name}</StyledTableCell>
                            <StyledTableCell align="center">{row.category}</StyledTableCell>
                            <StyledTableCell align="center">{convertTime(row.shedule)}</StyledTableCell>
                            <StyledTableCell align="center">
                                IDR {row.price}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

DetailInvoiceTable.propTypes = {
    rows: PropTypes.array.isRequired
}

export default DetailInvoiceTable