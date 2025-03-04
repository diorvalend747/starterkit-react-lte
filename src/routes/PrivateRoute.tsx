import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../store/store';

const PrivateRoute = () => {
  const isLoggedIn = useAppSelector((state) => state.ui.user);
  return isLoggedIn ? <Outlet /> : <Navigate to={`/login`} />;
};

export default PrivateRoute;
