
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { MainHeader } from "./components/header/MainHeader"
import LandingPage from "./pages/LandingPage"
import CreatePassword from "./pages/CreatePassoword"
import ForgetPassword from './pages/ForgetPassword'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import CheckoutPage from "./pages/CheckoutPage"
import ListMenuClass from "./pages/ListMenuClass"
import InvoicePage from "./pages/InvoicePage"
import DetailClass from "./pages/DetailClass"
import MyClass from "./pages/MyClass"
import DetailInvoicePage from "./pages/DetailInvoicePage"
import { EmailConfirmationLogin } from "./pages/EmailConfirmationLogin"
import { EmailConfirmationPurchase } from "./pages/EmailConfirmationPurchase"
import AdminLayout from "./components/admin/AdminLayout"
import AdminCoursePage from "./pages/AdminCoursePage"
import AdminCategoryPage from "./pages/AdminCategoryPage"
import AdminPaymentPage from "./pages/AdminPaymentPage"
import AdminUserPage from "./pages/AdminUserPage"
import AdminSchedulePage from "./pages/AdminSchedulePage"
import AdminInvoicePage from "./pages/AdminInvoicePage"
import AdminAddCourse from "./pages/AdminAddCourse";
import AdminEditCourse from "./pages/AdminEditCourse";
import AdminAddCategory from "./pages/AdminAddCategory";
import AdminEditCategory from "./pages/AdminEditCategory";
import AdminAddPayment from "./pages/AdminCreatePayment";
import AdminEditPayment from "./pages/AdminEditPayment";
import AdminAddUser from "./pages/AdminAddUser";
import AdminEditUser from "./pages/AdminEditUser";
import AdminAddSchedule from "./pages/AdminAddSchedule";
import { AuthProvider } from "./contexts/AuthContext";
import AuthMiddleware from "./middlewares/AuthMidleware";
import AdminMiddleware from "./middlewares/AdminMiddleware";
import AdminDetailInvoice from "./pages/AdminDetailInvoice";
import GuestMiddleware from "./middlewares/GuestMiddleware";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <MainHeader />
        <Routes>
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/forget-password" exact element={<GuestMiddleware><ForgetPassword /></GuestMiddleware>} />
          <Route path="/create-password" exact element={<GuestMiddleware><CreatePassword /></GuestMiddleware>} />
          <Route path="/login" exact element={<GuestMiddleware><LoginPage /></GuestMiddleware>} />
          <Route path="/register" exact element={<GuestMiddleware><RegisterPage /></GuestMiddleware>} />
          <Route path="/checkout" exact element={<AuthMiddleware><CheckoutPage /></AuthMiddleware>} />
          <Route path="/list-menu-class/:id" exact element={<ListMenuClass />} />
          <Route path="/invoice" exact element={<AuthMiddleware><InvoicePage /></AuthMiddleware>} />
          <Route path="/email-confirmation-login/" exact element={<EmailConfirmationLogin />} />
          <Route path="/checkout-confirmation-purchase" exact element={<EmailConfirmationPurchase />} />
          <Route path="/detail-class/:id" exact element={<DetailClass />} />
          <Route path="/my-class" exact element={<AuthMiddleware><MyClass /></AuthMiddleware>} />
          <Route path="/detail-invoice/:id" exact element={<AuthMiddleware><DetailInvoicePage /></AuthMiddleware>} />
          <Route path="/admin" exact element={<AdminMiddleware><AdminLayout /></AdminMiddleware>} >
            <Route path="admin-course" exact element={<AdminCoursePage />} />
            <Route path="add-course" exact element={<AdminAddCourse />} />
            <Route path="edit-cource/:id" exact element={<AdminEditCourse />} />
            <Route path="admin-category" exact element={<AdminCategoryPage />} />
            <Route path="add-category" exact element={<AdminAddCategory />} />
            <Route path="edit-category/:id" exact element={<AdminEditCategory />} />
            <Route path="admin-payment" exact element={<AdminPaymentPage />} />
            <Route path="add-payment" exact element={<AdminAddPayment />} />
            <Route path="edit-payment/:id" exact element={<AdminEditPayment />} />
            <Route path="admin-user" exact element={<AdminUserPage />} />
            <Route path="add-user" exact element={<AdminAddUser />} />
            <Route path="edit-user/:id" exact element={<AdminEditUser />} />
            <Route path="admin-schedule" exact element={<AdminSchedulePage />} />
            <Route path="add-schedule" exact element={<AdminAddSchedule />} />
            <Route path="admin-invoice" exact element={<AdminInvoicePage />} />
            <Route path="admin-detail-invoice/:id" exact element={<AdminDetailInvoice />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
