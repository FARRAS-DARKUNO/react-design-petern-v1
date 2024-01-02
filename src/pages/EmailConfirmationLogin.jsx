import { Grid, Typography, Stack } from "@mui/material"
import Oke from '../assets/oke.svg';
import ConfirmationButton from "../components/button/ConfirmationButton";
import { backroundColor, gray2Color } from "../utils/color";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

export const EmailConfirmationLogin = () => {

    const { ConfimPassword, isLoading } = useAuth()

    useEffect(() => {
        const currentURL = window.location.href;
        const url = new URL(currentURL);
        const email = url.searchParams.get('email');
        console.log(email)

        ConfimPassword(email)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])


    const navigate = useNavigate()

    if (isLoading){
        return <h1>Loading ...</h1>
    }
    
    return (
        <Stack height={'calc(100vh - 68px)'} marginTop={'68px'} justifyContent={'center'} alignItems={'center'}>
            <Grid item xs={12} sm={12} md={5}  >
                <Stack justifyContent={'center'} alignItems={'center'} >
                    <img src={Oke} width={"50%"} height={"50%"} />
                </Stack>
                <Typography variant="body1" fontWeight={'700'} color={backroundColor} margin={"auto"} textAlign="center" >Email confirmation susccess</Typography>
                <Typography variant="body1" fontWeight={'400'} color={gray2Color} margin={"auto"} textAlign="center" >Congratulations! your email has already used.</Typography>
                <Stack direction="row" gap={4} paddingTop={"30px"} justifyContent={"center"}>
                    <ConfirmationButton title={isLoading ? "Loading" : 'Login here'} action={() => isLoading ? null : navigate('/login')} />
                </Stack>
            </Grid>
        </Stack>
    )

}