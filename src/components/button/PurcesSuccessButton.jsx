import {Stack, Button } from "@mui/material"
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { brownColor, yellowColor } from '../../utils/color'
import { useNavigate } from "react-router-dom";
const PureSuccessButton = () => {
    const navigation = useNavigate()
    return (
        <Stack direction="row" gap={2} paddingTop={"30px"} margin={"auto"} justifyContent={"center"}>
            <Button variant="outlined" startIcon={<HomeIcon />}
                onClick={() => navigation('/')}
                sx={{
                    border: `1px solid ${brownColor()}`,
                    color: brownColor(),
                }}
            >
                Back to Home
            </Button>
            <Button variant="text" startIcon={<ArrowForwardIcon />}
                onClick={() => navigation('/invoice')}
                sx={{
                    background: yellowColor(),
                    paddingX: '15px',
                    color: brownColor(),
                }}
            >
                Open Invoice
            </Button>
        </Stack>
    )
}

export default PureSuccessButton