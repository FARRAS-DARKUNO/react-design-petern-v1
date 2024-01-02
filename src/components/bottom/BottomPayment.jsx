import {
    Box,
    Stack,
    Typography,
} from "@mui/material"

import { brownColor, yellowColor } from "../../utils/color";
import FlatButtonForm from "../button/FlatButtonForm";
import PropTypes from "prop-types";


const BottomPayment = ({price, action}) => {
    return (
        <Stack
            width={'100%'}
            height={'40px'}
            flexDirection={'row'}
            padding={'10px 0px'}
            justifyContent={'space-between'}
        >
            <Stack flexDirection={'row'} alignItems={'center'} marginLeft={'5%'}>
                <Typography sx={{
                    color: brownColor,
                    typography: { lg: 'body1', md: 'body1', sm: 'caption', xs: 'caption' },
                    marginRight: '5px'
                }}>
                    Total Price
                </Typography>
                <Typography sx={{
                    color: yellowColor,
                    typography: { lg: 'h6', md: 'h6', sm: 'body2', xs: 'body2' },
                    marginRight: '5px',
                    fontWeight: 700
                }}>
                    {`IDR ${price}`}
                </Typography>
            </Stack>
            <Box marginRight={'5%'} >
                <FlatButtonForm title={'Pay Now'} action={action}/>
            </Box>
        </Stack>
    )
}

BottomPayment.propTypes = {
    price: PropTypes.number.isRequired,
    action: PropTypes.func.isRequired,
};

export default BottomPayment