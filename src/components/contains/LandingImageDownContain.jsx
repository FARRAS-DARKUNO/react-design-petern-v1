import {
    
    Stack,
    Typography
} from "@mui/material"
import imageUp from "../../assets/landingDown.png"

const LandingImageDownContain = () => {
    return (
        <Stack marginTop={'30px'} alignItems={'start'} justifyContent={'center'} sx={{
            backgroundImage: `url(${imageUp})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            padding: { lg: "30px 5%", md: "30px 5%", sm: "15px 5%", xs: "15px 5%" },

        }}>
            <Typography
                sx={{
                    typography: { lg: 'h3', md: 'h3', sm: 'h4', xs: 'h4' }
                }}
                width={"300"}
                align="left"
                marginBottom={"27px"}
            >
                Gets your best benefit
            </Typography>
            <Typography
                sx={{
                    typography: { lg: 'h5', md: 'h5', sm: 'body2', xs: 'body2' }
                }}
                width={"300"}
                align="left"
            >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam.
            </Typography>
        </Stack>
    )
}

export default LandingImageDownContain