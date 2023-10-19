import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

const ProtectedRoutes = () => {
  const { isAuthenticated, loading } = useAuth();

  if(loading) return <h2>Loading...</h2>
  if(!isAuthenticated && !loading) return <Navigate to='/login' replace /> 

  return (
    <Outlet />
  )
}

export default ProtectedRoutes