import Footer from "../components/footer/Footer"
import ProductView from "../components/contains/ProductView"
import LandingMoreClassContain from "../components/contains/LandingMoreClassContain"
import { Typography, Stack, Divider } from "@mui/material";
import { blackColor } from '../utils/color'
import { useGetDetailProduct } from '../hooks/useListDetailProduct';
import { useParams } from "react-router-dom";
import { useGetPaymentCheckout } from "../hooks/useGetPaymentCheckout";

const DetailClass = () => {
    const { id } = useParams()
    console.log("data" + id)
    const { listMoreClass, dataDetail, loading } = useGetDetailProduct(id);
    const { payment, isLoadingPayment } = useGetPaymentCheckout()

    if (loading || isLoadingPayment) {
        return <h1>Loading ...</h1>
    }

    return (
        <Stack width={'100%'}>
            <ProductView data={dataDetail} payment={payment}/>
            <Stack padding={"0px 5%"} margin={"70px 0px"} >
                <Typography variant="h5" color={blackColor} fontWeight={'700'} marginBottom={'15px'}>
                    Description
                </Typography>
                <Typography variant="body1" color={blackColor} fontWeight={'500'}>
                    {dataDetail.description}
                </Typography>
            </Stack>

            <Divider sx={{ marginBottom: '40px' }} />

            <LandingMoreClassContain
                title="Another menu in this class"
                list={listMoreClass}
            />
            <Footer />
        </Stack>

    )
}


export default DetailClass;