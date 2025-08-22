import { Navigate, useLocation } from 'react-router-dom';

export default function RequireAuth({ children }) {
   const token = localStorage.getItem('accessToken');
   const location = useLocation();
   if (!token)
      return <Navigate to="/login" replace state={{ from: location }} />;
   return children;
}
