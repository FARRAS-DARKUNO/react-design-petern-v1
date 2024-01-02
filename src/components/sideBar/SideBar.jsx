import { useState } from "react";
import { useCustomNavigate } from "../../hooks/useAdminNavigarion";
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LogoutIcon from '@mui/icons-material/Logout';
import ReceiptIcon from '@mui/icons-material/Receipt';
import MenuIcon from '@mui/icons-material/Menu';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import CategoryIcon from '@mui/icons-material/Category';
import { brownColor, whiteColor } from '../../utils/color'
import {
    Box,
    CssBaseline,
    Toolbar,
    IconButton,
    Typography,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Container
} from "@mui/material";
import { AppBar, Drawer } from "./StyledSideBar";

// eslint-disable-next-line react/prop-types
const SideBar = ({ children }) => {
    const [open, setOpen] = useState(true);

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const {
        goToAdminCourse,
        goToAdminCategoryCourse,
        goToAdminPayment,
        goToAdminUsers,
        goToAdminInvoice,
        goToAdminSchedule,
        logOut,
    } = useCustomNavigate();

    const listMenus = [
        {
            icon: <SoupKitchenIcon />,
            title: "Course",
            navigate: goToAdminCourse
        },
        {
            icon: <CategoryIcon />,
            title: "Category",
            navigate: goToAdminCategoryCourse
        },
        {
            icon: <PaymentIcon />,
            title: "Payment",
            navigate: goToAdminPayment
        },
        {
            icon: <AccountBoxIcon />,
            title: "User",
            navigate: goToAdminUsers
        },
        {
            icon: <CalendarMonthIcon />,
            title: "Schedule",
            navigate: goToAdminSchedule
        },
        {
            icon: <ReceiptIcon />,
            title: "Invoice",
            navigate: goToAdminInvoice
        },
        {
            icon: <LogoutIcon />,
            title: "Log Out",
            navigate: logOut
        },
    ]
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute" open={open} sx={{ backgroundColor: brownColor }}>
                <Toolbar
                    sx={{
                        pr: '24px', // keep right padding when drawer closed
                    }}
                >
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={toggleDrawer}
                        sx={{
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        component="h1"
                        variant="h6"
                        color="inherit"
                        noWrap
                        sx={{ flexGrow: 1 }}
                    >
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                    }}
                >
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <List component="nav">
                    {
                        listMenus.map((value, index) => {
                            return (
                                <ListItemButton onClick={value.navigate} key={index}>
                                    <ListItemIcon>
                                        {value.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={value.title} />
                                </ListItemButton>
                            )
                        })
                    }
                </List>
            </Drawer>
            <Box
                component="main"
                sx={{
                    backgroundColor: whiteColor,
                    flexGrow: 1,
                    height: '100vh',
                    overflow: 'auto',
                }}
            >
                <Toolbar />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    {children}
                </Container>
            </Box>
        </Box>
    )
}
export default SideBar