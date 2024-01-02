import { Stack, Typography } from "@mui/material"
import imageUp from "../../assets/landingUP.png"

const LandingImageUPContain = () => {
    return (
        <Stack marginTop={'68px'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} sx={{
            backgroundImage: `url(${imageUp})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            padding: { lg: "50px 20%", md: "50px 20%", sm: "30px 5%", xs: "30px 5%" },
        }}>
            <Typography width={"300"} align="center" marginBottom={"27px"} sx={{
                typography: { lg: 'h3', md: 'h3', sm: 'h4', xs: 'h4' }
            }}>
                Be the next great chef
            </Typography>
            <Typography width={"300"} align="center" sx={{
                typography: { lg: 'h4', md: 'h4', sm: 'body1', xs: 'body1' }
            }}>
                We are able to awaken your cooking skills to become a classy chef and ready to dive into the professional world
            </Typography>
        </Stack>
    )
}

export default LandingImageUPContain