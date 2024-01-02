import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';

export const useCustomNavigate = () => {
  const { Authlogout } = useContext(AuthContext); 

  const navigate = useNavigate();
  const goToAdminCourse = () => navigate('admin-course');
  const goToAdminCategoryCourse = () => navigate('admin-category');
  const goToAdminPayment = () => navigate('admin-payment');
  const goToAdminUsers = () => navigate('admin-user');
  const goToAdminInvoice = () => navigate('admin-invoice');
  const goToAdminSchedule = () => navigate('admin-schedule')
  const logOut = () => Authlogout();

  return {
    goToAdminCourse,
    goToAdminCategoryCourse,
    goToAdminPayment,
    goToAdminUsers,
    goToAdminInvoice,
    goToAdminSchedule,
    logOut,
  };
};