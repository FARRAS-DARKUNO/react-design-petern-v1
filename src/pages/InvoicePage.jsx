import {
    Stack,
    Typography,
} from "@mui/material"
import Footer from "../components/footer/Footer"
import { brownColor, gray3Color } from '../utils/color'
import { Link } from "react-router-dom"
import InvoiceTable from "../components/table/InvoiceTable"
import { useGetInvoiceUser } from "../hooks/useGetInvoiceUser"
const InvoicePage = () => {

    const { data, isLoading } = useGetInvoiceUser()

   if(isLoading){
    return <h1>Loading ..</h1>
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
                    <Typography variant="body1" fontWeight={'700'} color={brownColor} >
                        Invoice
                    </Typography>
                </Stack>
                <Typography variant="h5" fontWeight={'700'} color={brownColor} marginY={'30px'}>
                    Menu Invoice
                </Typography>

                <InvoiceTable rows={data} />

            </Stack>
            <Footer />
        </Stack>
    )
}

export default InvoicePage