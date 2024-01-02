import {
    Grid,
    Stack,
    Typography,
} from "@mui/material"
import Footer from "../components/footer/Footer"
import { brownColor, gray3Color } from '../utils/color'
import { Link, useParams } from "react-router-dom"
import DetailInvoiceTable from "../components/table/DetailInvoiceTable"
import { useGetDetailInvoice } from "../hooks/useGetDetailInvoice"
import { convertTime } from "../utils/moment"

const DetailInvoicePage = () => {

    const {id} = useParams()
    const {data, isLoading, totalPrice} = useGetDetailInvoice(id)

    if(isLoading){
        return <h1>Loading ...</h1>
    }

    return (
        <Stack marginTop={'68px'} width={'100%'} height={'calc(100vh - 68px)'} justifyContent={'space-between'}>
            <Stack justifyContent={'start'} alignItems={'start'} padding={'10px 5%'}>
                <Stack flexDirection={'row'}>
                    <Link to={'/'} style={{ textDecoration: 'none' }}>
                        <Typography variant="body1" fontWeight={'700'} color={gray3Color} marginRight={'5px'}>
                            {"Home >"}
                        </Typography>
                    </Link>
                    <Link to={'/invoice'} style={{ textDecoration: 'none' }}>
                        <Typography variant="body1" fontWeight={'700'} color={gray3Color} marginRight={'5px'}>
                            {"Invoice >"}
                        </Typography>
                    </Link>
                    <Typography variant="body1" fontWeight={'700'} color={brownColor} >
                        Detail Invoice
                    </Typography>
                </Stack>
                <Typography variant="h6" fontWeight={'700'} color={brownColor} marginY={'8px'}>
                    Detail Invoice
                </Typography>
                <Grid container marginY={'20px'}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="body1" fontWeight={'500'} color={brownColor} >
                            No. Invoice : {data.noInvoice}
                        </Typography>
                        <Typography variant="body1" fontWeight={'500'} color={brownColor} >
                            Date : {convertTime(data.createAt)}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} justifyContent={'end'} display={'flex'} >
                        <Typography variant="body1" fontWeight={'700'} color={brownColor} >
                            Total Price : {totalPrice}
                        </Typography>
                    </Grid>
                </Grid>
                <DetailInvoiceTable rows={data.listInvoice}/>
            </Stack>
            <Footer />
        </Stack>
    )
}
export default DetailInvoicePage