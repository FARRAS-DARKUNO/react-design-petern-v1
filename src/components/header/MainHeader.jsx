import { useState, useContext } from "react";
import {
    AppBar,
    Toolbar,
    CardMedia,
    Hidden,
    Drawer,
    IconButton,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import {
    whiteColor,
    yellowColor,
} from "../../utils/color"
import { MainHeaderButtonBeforeLogin } from '../button/MainHeaderButtonBeforeLogin';
import { MainHeaderButtonAfterLogin } from '../button/MainHeaderButtonAfterLogin';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";


export const MainHeader = () => {
    const drawerWidth = 240;
    const { isAuth, Authlogout } = useContext(AuthContext);

    const [open, setOpen] = useState(false);


    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    }));

    const menusBeforeLogin = [
        {
            title: "LOG IN",
            page: '/login',
        },
        {
            title: "REGISTER",
            page: '/register',
        },
    ];

    const menusAfterLogin = [
        {
            title: "ACCOUNT",
            page: '/',
        },
        {
            title: "CART",
            page: '/checkout',
        },
        {
            title: "MY CLASS",
            page: '/my-class',
        },
        {
            title: "INVOICE",
            page: '/invoice',
        },
        {
            title: "LOG OUT",
            page: '/',
        },
    ];

    return (
        <AppBar elevation={0} sx={{
            backgroundColor: whiteColor,
            padding: "0px 5%",
            height: '68px',
            justifyContent: "center",

        }} >
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Link to={'/'}>
                    <CardMedia
                        component="img"
                        alt="Image"
                        height="50px"
                        width="70px"
                        image="https://res.cloudinary.com/dghcfqoie/image/upload/v1696782899/image_2_zstzvi.png"
                    />
                </Link>
                <Hidden mdDown>
                    {
                        isAuth ? <MainHeaderButtonAfterLogin /> : <MainHeaderButtonBeforeLogin />
                    }
                </Hidden>
                <Hidden mdUp>
                    <IconButton onClick={() => setOpen(true)}>
                        <MenuIcon
                            sx={{ color: yellowColor() }}
                        />
                    </IconButton>
                </Hidden>

            </Toolbar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={() => setOpen(false)}>
                        <ChevronRightIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                {
                    isAuth
                        ? <List>
                            {menusAfterLogin.map((text) => (
                                <Link
                                    key={text.title}
                                    style={{ textDecoration: 'none', color: 'black' }}
                                    to={text.title == "LOG OUT" ? null : text.page}
                                    onClick={text.title == "LOG OUT" ? Authlogout : null}
                                >
                                    <ListItem key={text.title} disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary={text.title} />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                        : <List>
                            {menusBeforeLogin.map((text) => (
                                <Link key={text.title} style={{ textDecoration: 'none', color: 'black' }} to={text.page}>
                                    <ListItem key={text.title} disablePadding>
                                        <ListItemButton>
                                            <ListItemText primary={text.title} />
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            ))}
                        </List>
                }
            </Drawer>
        </AppBar>
    )
}