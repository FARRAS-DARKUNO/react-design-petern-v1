import {
    Box,
    Stack,
    Typography,
    Checkbox,
    Divider,
    FormControlLabel,
} from "@mui/material"
import { brownColor } from "../utils/color";
import BottomPayment from "../components/bottom/BottomPayment";
import { useState } from "react";
import CheckoutCard from "../components/cards/CheckOutCard";
import ModalPaymanet from "../components/modal/ModalPayment";
import { useGetCart } from "../hooks/useGetCart";
import { useGetPaymentCheckout } from "../hooks/useGetPaymentCheckout";
import { useCheckout } from "../hooks/useChekout";

const CheckoutPage = () => {
    const {
        createInvoice,
        setListData,
        setIdPayment,
        // isLoadingCheckout,
        listData,
    } = useCheckout()

    const {
        data,
        isLoadingcart,
        price,
        childChecked,
        parentChecked,
        loadingDelete,
        handleChildChange,
        handleParentChange,
        deleteCart
    } = useGetCart(setListData, listData)

    const { payment, isLoadingPayment } = useGetPaymentCheckout()


    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };



    if (isLoadingcart || isLoadingPayment) {
        return <h1>Loading ...</h1>
    }


    return (
        <>
            <Stack marginTop={'68px'} width={'100%'} height={'calc(100vh - 68px)'} justifyContent={'space-between'}>
                <Stack width={'100%'}   >
                    <Stack flexDirection={'row'} alignItems={'center'} padding={'0px 5%'} marginTop={'30px'}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={parentChecked}
                                    onChange={handleParentChange}
                                />
                            }
                        />
                        <Typography color={brownColor}>
                            Pilih Semua
                        </Typography>
                    </Stack>
                    <Box padding={'0px 5%'}>
                        <Divider />
                    </Box>
                    {
                        data.map((value, index) => {
                            return (
                                <CheckoutCard
                                    key={index}
                                    data={value}
                                    childChecked={childChecked}
                                    handleChildChange={handleChildChange}
                                    index={index}
                                    dellete={deleteCart}
                                    isLoading={loadingDelete}
                                />
                            )
                        })
                    }
                </Stack>
                <BottomPayment price={price} action={handleOpen} />
            </Stack>
            <ModalPaymanet data={payment} open={open} handleClose={handleClose} action={createInvoice} setId={setIdPayment}/>
        </>
    )
}
export default CheckoutPage