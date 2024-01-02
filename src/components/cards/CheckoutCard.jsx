import {
    Box,
    Stack,
    Typography,
    Checkbox,
    Divider,
    FormControlLabel,
    CircularProgress
} from "@mui/material"
import { yellowColor, gray3Color, gray1Color } from "../../utils/color";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PropTypes from "prop-types";
import { imageUrl } from "../../utils/imageUrl";
import { Link } from "react-router-dom";

const CheckoutCard = (Props) => {
    return (
        <>
            <Stack padding={'20px 5%'} justifyContent={'space-between'} flexDirection={'row'} alignItems={'center'}>
                <Stack flexDirection={'row'} >
                    <FormControlLabel
                        sx={{
                            padding: "0px",
                            margin: '0px'
                        }}
                        control={
                            <Checkbox
                                sx={{
                                    padding: "0px",
                                    marginRight: '15px'
                                }}
                                checked={Props.childChecked[Props.index]}
                                onChange={() => Props.handleChildChange(Props.index)}
                                color="primary"
                            />
                        }
                    />
                    <Box sx={{
                        width: { lg: '150px', md: '150px', sm: '100px', xs: '100px' },
                        aspectRatio: '16/9',
                        backgroundImage: `url(${imageUrl}${Props.data.image})`,
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
                        <Typography color={gray3Color} variant="caption">
                            Schedule : {Props.data.schedule}
                        </Typography>
                        <Typography color={yellowColor} sx={{
                            typography: { lg: 'h6', md: 'h6', sm: 'body1', xs: 'body1' }
                        }}>
                            IDR {Props.data.price}
                        </Typography>
                    </Stack>
                </Stack>
                {
                    Props.isLoading
                        ? <CircularProgress />
                        : <Link onClick={() => Props.dellete(Props.data.id)}>
                            <DeleteForeverIcon sx={{ color: 'red' }} />
                        </Link>
                }

            </Stack>
            <Box padding={'0px 5%'} margin={'0px'}>
                <Divider />
            </Box>
        </>
    )
};

CheckoutCard.propTypes = {
    data: PropTypes.object,
    index: PropTypes.number.isRequired,
    childChecked: PropTypes.array.isRequired,
    handleChildChange: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    dellete: PropTypes.func.isRequired
};
export default CheckoutCard