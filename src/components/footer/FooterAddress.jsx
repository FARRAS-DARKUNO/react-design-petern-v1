import { Typography, Grid, Box } from "@mui/material";
import { yellowColor, whiteColor } from "../../utils/color";
const FooterAddress = () => {
    const icons = [
        'https://res.cloudinary.com/dghcfqoie/image/upload/v1696910423/Frame_1744_kdysuh.png',
        'https://res.cloudinary.com/dghcfqoie/image/upload/v1696910423/Group_97_amcslu.png',
        'https://res.cloudinary.com/dghcfqoie/image/upload/v1696910423/Group_98_fvebtd.png',
        'https://res.cloudinary.com/dghcfqoie/image/upload/v1696910423/Group_99_cfx9i1.png',
        'https://res.cloudinary.com/dghcfqoie/image/upload/v1696910423/Group_100_yt6tza.png'

    ]
    return (
        <Grid item xs={12} md={4} sx={{
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
                Address
            </Typography>
            <Typography sx={{
                alignItems: 'start',
                color: whiteColor,
                typography: 'body1',
            }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
            </Typography>
            <Typography sx={{
                alignItems: 'start',
                color: yellowColor,
                typography: 'body1',
                margin: '5px 0px'
            }}>
                Contact Us
            </Typography>
            <Box>
                {
                    icons.map(image => {
                        return (
                            <img src={image} alt={image} style={{ height: 45, marginRight: 15 }} key={image} />
                        )
                    })
                }
            </Box>
        </Grid>
    )
}

export default FooterAddress