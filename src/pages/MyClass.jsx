import {
    Stack,
    Box,
} from "@mui/material"
import Footer from '../components/footer/Footer'
import MyClassCard from "../components/cards/MyClassCard";
import { useGetMyClass } from "../hooks/useGetMyClass";
const MyClass = () => {
    const { MyClassData, loading } = useGetMyClass();
    if (loading) {
        return <h1>Loading ...</h1>
    }
    return (
        <Stack marginTop={'68px'} width={'100%'} height={'calc(100vh - 68px)'} justifyContent={'space-between'}>
            {
                MyClassData.map(value => {
                    return (
                        <Box key={value.id}>
                            <MyClassCard data={value} />
                        </Box>
                    )
                })
            }
            <Footer />
        </Stack>

    )
    // console.log("myclass2",MyClassData)
}
export default MyClass