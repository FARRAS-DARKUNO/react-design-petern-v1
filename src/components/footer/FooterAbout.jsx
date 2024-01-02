import { Typography, Grid } from "@mui/material";
import { yellowColor, whiteColor } from "../../utils/color";
const FooterAbout = () => {
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
                About Us
            </Typography>
            <Typography sx={{
                alignItems: 'start',
                color: whiteColor,
                typography: 'body1',
            }}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </Typography>
        </Grid>
    )
}
export default FooterAbout