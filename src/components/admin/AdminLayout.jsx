import { Outlet } from "react-router-dom"
import SideBar from "../sideBar/SideBar"

const AdminLayout = () => {
    return(
        <SideBar>
            <Outlet/>
        </SideBar>
    )
}
export default AdminLayout