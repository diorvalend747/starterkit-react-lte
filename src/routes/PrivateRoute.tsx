import { Navigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

interface AuthProviderProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: AuthProviderProps) => {
  const { user } = useAuth();

  return user ? children : <Navigate to='/login' />;
};

export default PrivateRoute;
