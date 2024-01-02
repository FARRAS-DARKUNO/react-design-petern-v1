import {
    Stack,
    Typography,
    Box,
    Divider
} from "@mui/material"
import { yellowColor, gray3Color, gray1Color } from "../../utils/color";
import { imageUrl } from "../../utils/imageUrl";
import { convertTime } from "../../utils/moment";

const MyClassCard = (Props) => {

    return (
        <>
            <Stack padding={'20px 5%'} flexDirection={'row'} alignItems={'center'}>
                <Box sx={{
                    width: { lg: '180px', md: '180px', sm: '100px', xs: '100px' },
                    height: '100px',
                    backgroundImage: `url("${imageUrl}${Props.data.image}")`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }} />
                <Stack marginLeft={'10px'}>
                    <Typography color={gray3Color} variant="caption">
                        {Props.data.category}
                    </Typography>
                    <Typography color={gray1Color} sx={{
                        typography: { lg: 'h6', md: 'h6', sm: 'body1', xs: 'body1' }
                    }}>
                        {Props.data.title}
                    </Typography>
                    <Typography color={yellowColor} sx={{
                        typography: { lg: 'h6', md: 'h6', sm: 'body2', xs: 'body2' }
                    }}>
                        {"Schedule : " + convertTime(Props.data.schedule)}
                    </Typography>

                </Stack>
            </Stack>
            <Box padding={'0px 5%'} margin={'0px'}>
                <Divider />
            </Box>
        </>
    )
}
export default MyClassCard