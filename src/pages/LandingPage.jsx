
import LandingImageDownContain from "../components/contains/LandingImageDownContain"
import LandingImageUPContain from "../components/contains/LandingImageUPContain"
import LandingInfoContain from "../components/contains/LandingInfoContain"
import LandingMoreClassContain from "../components/contains/LandingMoreClassContain"
import LandingMoreFoodType from "../components/contains/LandingMoreFoodType"
import Footer from "../components/footer/Footer"
import FullBorderImageSkeleton from '../components/skeleton/FullBorderImageSkeleton'
import { useGetClass } from "../hooks/useGetClass"
import { useListType } from "../hooks/useListType"

const LandingPage = () => {
    const { listMoreClass, getClassLoading } = useGetClass();
    const { listMenuType, listTypeLoading } = useListType();


    if (getClassLoading || listTypeLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <LandingImageUPContain />
            <LandingInfoContain />
            {
                listMoreClass == null
                    ? <FullBorderImageSkeleton />
                    : <LandingMoreClassContain
                        title="More professional class"
                        list={listMoreClass}
                    />
            }

            <LandingImageDownContain />
            {
                listMenuType == null
                    ? <FullBorderImageSkeleton />
                    : <LandingMoreFoodType data={listMenuType} />
            }
            <Footer />
        </>

    )
}
export default LandingPage