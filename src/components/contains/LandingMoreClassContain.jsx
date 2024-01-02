import {
    Stack,
    Grid,
    Typography
} from "@mui/material"
import { brownColor } from "../../utils/color"
import MenuCard from "../cards/MenuCard"
import PropTypes from "prop-types";


const LandingMoreClassContain = (Props) => {

    return (
        <Stack justifyContent={'center'} alignItems={'center'}>
            <Typography sx={{
                alignItems: 'center',
                color: brownColor,
                fontWeight: 'bold',
                typography: { lg: 'h3', md: 'h3', sm: 'h5', xs: 'h5' }
            }}>
                {Props.title}
            </Typography>

            <Grid
                container
                spacing={0}
                justifyContent={'center'}
                alignItems={"center"}
                flexGrow={1}
                padding={"30px 10% "}
            >
                {
                    Props.list.map(value => {
                        return (
                            <Grid item xs={6} md={4} key={value.id} sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <MenuCard data={value}/>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Stack>
    )
}

LandingMoreClassContain.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired
}

export default LandingMoreClassContain