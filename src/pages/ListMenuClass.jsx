import {
    Box,
    Typography,
    Stack,
    Divider,
} from "@mui/material"
import Footer from "../components/footer/Footer"
import { blackColor } from '../utils/color'
import LandingMoreClassContain from "../components/contains/LandingMoreClassContain"
import { useParams } from "react-router-dom";
import FullBorderImageSkeleton from "../components/skeleton/FullBorderImageSkeleton"
import DescriptionSkeleton from "../components/skeleton/DescriptionSkeleton"
import useTypeMenu from "../hooks/useGetDetailCategory"
import { useGetCategoryClass } from "../hooks/useGetClassCategory"
import { imageUrl } from "../utils/imageUrl";

const ListMenuClass = () => {
    const { id } = useParams()
    const {listMoreClassCategory } = useGetCategoryClass(id);
    const {typeMenuz} = useTypeMenu(id); 
    

    return (
        <Stack marginTop={"86px"} >
            {
                typeMenuz == null
                    ? <FullBorderImageSkeleton />
                    : <Box sx={{
                        backgroundImage: `url("${imageUrl}${typeMenuz.image}")`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: '100%',
                        aspectRatio : '16/4'
                    }} />
            }
            {
                typeMenuz == null
                    ? <DescriptionSkeleton />
                    : <Stack sx={{
                        padding: "0px 5%",
                        margin: "70px 0px"
                    }}>
                        <Typography variant="h5" color={blackColor} fontWeight={'700'}>
                            {typeMenuz.name}
                        </Typography>
                        <br />
                        <Typography variant="body1" color={blackColor} fontWeight={'500'}>
                            {typeMenuz.description}
                        </Typography>
                    </Stack>
            }
            <Divider sx={{ marginBottom: '50px' }} />
            {
                listMoreClassCategory == null
                    ? <FullBorderImageSkeleton />
                    : <LandingMoreClassContain
                        title="Another menu in this class"
                        list={listMoreClassCategory}
                    />
            }
            <Footer />
        </Stack>
    )
}
export default ListMenuClass