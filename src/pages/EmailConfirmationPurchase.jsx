
import { Grid, Typography, Stack } from "@mui/material"
import Oke from '../assets/oke.svg';
import { backroundColor, gray2Color } from "../utils/color";
import PureSuccessButton from "../components/button/PurcesSuccessButton";


export const EmailConfirmationPurchase = () => {
    

    return (
        <Stack height={'calc(100vh - 68px)'} marginTop={'68px'} justifyContent={'center'} alignItems={'center'}>

            <Grid container spacing={3} justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={12} md={5}  >
                    <Stack justifyContent={'center'} alignItems={'center'} >
                        <img src={Oke} width={"40%"} height={"40%"} />
                    </Stack>
                    <Typography variant="body1" fontWeight={'700'} color={backroundColor} margin={"auto"} textAlign="center" gap={"20px"}>Purchase Successfully</Typography>
                    <Typography variant="body1" fontWeight={'400'} color={gray2Color} margin={"auto"} textAlign="center" >Horay!! Let’s cook and become a professional cheff.</Typography>
                    <PureSuccessButton/>
                </Grid>

            </Grid>

        </Stack>
    )

}