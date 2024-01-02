import { Button, Box } from "@mui/material";
import {
    brownColor,
    yellowColor
} from "../../utils/color"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

export const MainHeaderButtonAfterLogin = () => {
    const { Authlogout } = useContext(AuthContext); 

    const boxTextButtonStyle = {
        display: 'flex',
        color: brownColor(),
        padding: '6px 10px',
        margin: "0px 0px 0px 20px",
        borderRadius: '12px',
        fontSize: '16px',
    }
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: "center"
        }}>
            <Link to={'/checkout'}>
                <ShoppingCartIcon sx={{ color: brownColor() }} />
            </Link>
            <Link to={'/my-class'} style={{ textDecoration: 'none' }}>
                <Button variant="text" sx={boxTextButtonStyle} >
                    My Class
                </Button>
            </Link>
            <Link to={'/invoice'} style={{ textDecoration: 'none' }}>
                <Button variant="text" sx={boxTextButtonStyle}>
                    Invoice
                </Button>
            </Link>
            <Box sx={{
                width: '1px',
                height: 24,
                backgroundColor: brownColor(),
                margin: "0px 34px 0px 24px"

            }} />
            <PersonIcon sx={{ color: yellowColor() }} />
            <Link onClick={() => Authlogout()}>
                <LogoutIcon sx={{ color: brownColor(), margin: "0px 0px 0px 24px" }} />
            </Link>

        </Box>
    )


}
