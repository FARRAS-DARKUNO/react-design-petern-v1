import {
    Box,
    CardContent,
    Typography,
    Stack
} from "@mui/material"
import { gray4Color, brownColor, yellowColor } from "../../utils/color"
import { Link } from "react-router-dom"
import { imageUrl } from "../../utils/imageUrl"

const MenuCard = (Props) => {
    return (
        <CardContent sx={{
            width: "320px",
        }}>
            <Link to={`/detail-class/${Props.data.id}`} style={{ textDecoration: 'none' }}>
                <Box sx={{
                    width: "100%",
                    aspectRatio: "16/10",
                    backgroundImage: `url(${imageUrl}${Props.data.image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }} />
                <Stack sx={{
                    padding: { lg: "10px", md: "10px", sm: "8px 0px", xs: "8px 0px" },
                    justifyContent: 'space-between',
                    height: { lg: "160px", md: "160px", sm: "130px", xs: "130px" },
                }}>
                    <Box>
                        <Typography sx={{
                            color: gray4Color,
                            typography: { lg: "body1", md: "body1", sm: "body2", xs: "body2" },
                        }}>
                            {Props.data.categoryName}
                        </Typography>
                        <Typography sx={{
                            color: brownColor,
                            typography: { lg: "h5", md: "h5", sm: "body1", xs: "body1" },
                        }}>
                            {Props.data.name}
                        </Typography>
                    </Box>

                    <Typography sx={{
                        color: yellowColor,
                        typography: { lg: "h5", md: "h5", sm: "body1", xs: "body1" },
                        marginBottom: "10px"
                    }}>
                        {"IDR " + Props.data.price}
                    </Typography>
                </Stack>
            </Link>
        </CardContent >
    )
}

export default MenuCard