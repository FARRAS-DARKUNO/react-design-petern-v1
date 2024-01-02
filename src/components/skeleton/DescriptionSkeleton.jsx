import {
    Stack,
    Skeleton
} from "@mui/material"
const DescriptionSkeleton = () => {
    return (
        <Stack sx={{
            padding: "0px 5%",
            margin: "70px 0px"
        }}>
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" width={'50%'} />
        </Stack>
    )
}
export default DescriptionSkeleton