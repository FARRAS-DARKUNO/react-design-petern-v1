import {
    Grid,
    Typography,
    Card
} from "@mui/material"
import { gray4Color, brownColor, yellowColor } from "../../utils/color"

const LandingInfoContain = () => {

    const data = [
        {
            total: "200+",
            info: "Various cuisines available in professional class"
        },
        {
            total: "50+",
            info: "A chef who is reliable and has his own characteristics in cooking"
        },
        {
            total: "30+",
            info: "Cooperate with trusted and upscale restaurants"
        }

    ]

    return (
        <Grid
            justifyContent={'center'}
            alignItems={'center'}
            flexGrow={1}
            container
            spacing={0}
            margin={"30px 0px"}
        >
            {
                data.map(value => {
                    return (
                        <Card variant="outlined" key={value.info} sx={{
                            height: "180px",
                            width: '310px',
                            margin: '20px',
                            padding: '20px',
                            borderRadius: 10,
                            borderColor: gray4Color(),
                            boxShadow: 1,
                        }}>
                            <Typography
                                variant="h3"
                                width={"300"}
                                align="center"
                                marginBottom={"27px"}
                                color={yellowColor()}
                            >
                                {value.total}
                            </Typography>
                            <Typography
                                variant="body1"
                                width={"300"}
                                align="center"
                                color={brownColor()}
                            >
                                {value.info}
                            </Typography>
                        </Card>
                    )
                })
            }
        </Grid>
    )
}

export default LandingInfoContain