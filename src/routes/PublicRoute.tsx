import { useAppSelector } from '../store/store';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoute = () => {
  const isLoggedIn = useAppSelector((state) => state.ui.user);
  return isLoggedIn ? <Navigate to={`/`} /> : <Outlet />;
};

export default PublicRoute;
