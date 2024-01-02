import {
    Stack,
    Grid,
    Typography
} from "@mui/material"
import { brownColor } from "../../utils/color"
import FoodTypeCard from "../cards/FoodTypeCard"
import PropTypes from "prop-types";

const LandingMoreFoodType = (Props) => {

    return (
        <Stack width={'100%'} justifyContent={'center'} alignItems={'center'} >
            <Typography sx={{
                alignItems: 'center',
                color: brownColor,
                fontWeight: 'bold',
                typography: { lg: 'h3', md: 'h3', sm: 'h5', xs: 'h5' },
                marginTop: '40px'
            }}>
                More food type as you can choose
            </Typography>

            <Grid
                container
                spacing={0}
                sx={{
                    display: "flex",
                    flexGrow: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: "30px 10% "
                }}

            >
                {
                    Props.data.map(value => {
                        return (
                            <Grid item xs={6} md={3} key={value.name} sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <FoodTypeCard data={value} />
                            </Grid>

                        )
                    })
                }
            </Grid>



        </Stack>
    )
}

LandingMoreFoodType.propTypes = {
    data: PropTypes.array.isRequired
}

export default LandingMoreFoodType