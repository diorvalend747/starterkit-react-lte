import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

interface AuthContextType {
  user: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<string | null>(null);

  // Check authentication on load
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/auth-check', { withCredentials: true })
      .then((res) => {
        if (res.data.authenticated) {
          setUser(res.data.user);
        }
      })
      .catch(() => setUser(null));
  }, []);

  // Login function
  const login = async (username: string, password: string) => {
    try {
      await axios.post(
        'http://localhost:5000/api/login',
        { username, password },
        { withCredentials: true }
      );
      const res = await axios.get('http://localhost:5000/api/auth-check', {
        withCredentials: true,
      });
      setUser(res.data.user);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  // Logout function
  const logout = async () => {
    await axios.post(
      'http://localhost:5000/api/logout',
      {},
      { withCredentials: true }
    );
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
