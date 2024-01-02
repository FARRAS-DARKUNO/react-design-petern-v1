import {
    Box,
    Typography
} from "@mui/material"
import { brownColor } from "../../utils/color"
import { Link } from "react-router-dom"
import PropTypes from "prop-types";
import { imageUrl } from "../../utils/imageUrl";

const FoodTypeCard = (Props) => {
    return (

        <Box sx={{
            display: "flex",
            width: { lg: "390px", md: "350px", sm: "320px", xs: "350px" },
            flexDirection: 'column',
            margin: '10px'
        }}>
            <Link style={{textDecoration : 'none'}} to={`/list-menu-class/${Props.data.id}`}>
                <Box sx={{
                    width: "100%",
                    aspectRatio: "16/9",
                    backgroundImage: `url(${imageUrl}${Props.data.image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }} />
                <Box sx={{
                    display: 'flex',
                    width: "100%",
                    padding: { lg: "10px", md: "10px", sm: "8px 0px", xs: "8px 0px" },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>


                    <Typography sx={{
                        color: brownColor,
                        typography: { lg: "h5", md: "h5", sm: "body1", xs: "body1" },
                    }}>
                        {Props.data.name}
                    </Typography>


                </Box>
            </Link>
        </Box >

    )
};

FoodTypeCard.propTypes = {
    data: PropTypes.object.isRequired
};

export default FoodTypeCard