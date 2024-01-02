import { Typography, Grid, Box } from "@mui/material";
import { yellowColor } from "../../utils/color";
const FooterProduct = () => {
    const data1 = ['Electric', 'LCGC', 'Offroad', 'SUV',]
    const data2 = ['Hatchback', 'MPV', 'Sedan', 'Truck']
    return (
        <Grid item xs={12} md={4} sx={{
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'start',
                flexDirection: 'column'
            }}>

                <Typography sx={{
                    alignItems: 'start',
                    color: yellowColor,
                    typography: 'body1',
                    marginTop: '5px'
                }}>
                    Product
                </Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    alignItems: 'start',
                    flexDirection: 'row'
                }}>
                    <Grid sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginRight: '10px'
                    }}>
                        {
                            data1.map(value => {
                                return (
                                    <li key={value}>{value}</li>
                                )
                            })
                        }
                    </Grid>
                    <Grid sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        {
                            data2.map(value => {
                                return (
                                    <li key={value}>{value}</li>
                                )
                            })
                        }
                    </Grid>
                </Box>
            </Box>

        </Grid>
    )
}
export default FooterProduct