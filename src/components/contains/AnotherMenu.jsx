import {
    Box,
    Grid,
    Typography
} from "@mui/material"
import { brownColor } from "../../utils/color";
import MenuCard from "../cards/MenuCard";


const AnotherMenu = () => {
    const tempData = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <Box sx={{
            display: "flex",
            width: "100%",
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            padding : "0px"
        }}>
            <Typography sx={{
                alignItems: 'center',
                color: brownColor,
                fontWeight: 'bold',
                typography: { lg: 'h3', md: 'h3', sm: 'h5', xs: 'h5' }
            }}>
                Another menu in this class
            </Typography>

            <Grid
                container
                spacing={0}
                // columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{
                    display : "flex",
                    flexGrow: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding : "30px 10% "
                }}

            >
                {
                    tempData.map(value => {
                        return (
                            <Grid item xs={6} md={4} key={value} sx={{
                                display : 'flex',
                                justifyContent : 'center',
                                alignItems : 'center'
                            }}>
                                <MenuCard />
                            </Grid>

                        )
                    })
                }
            </Grid>
        </Box>
    )
}

export default AnotherMenu;