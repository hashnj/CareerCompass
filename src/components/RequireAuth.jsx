import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useRecoilValueLoadable } from 'recoil';
import { authCheck } from '../store/auth';

// eslint-disable-next-line react/prop-types
const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation(); 
  const isAuthenticated = useRecoilValueLoadable(authCheck);

  if (isAuthenticated.state === 'loading') {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <p className="text-xl text-primary">Loading...</p>
      </div>
    );
  }

  if (isAuthenticated.state === 'hasError') {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  if (isAuthenticated.state === 'hasValue') {
    const user = isAuthenticated.contents; 
    // eslint-disable-next-line react/prop-types
    const hasRequiredRole = allowedRoles.includes(user?.role || '');

    if (hasRequiredRole) {
      return <Outlet />;
    }

    if (user) {
      return <Navigate to="/unauthorized" state={{ from: location }} replace />;
    }

    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return null; 
};

export default RequireAuth;
