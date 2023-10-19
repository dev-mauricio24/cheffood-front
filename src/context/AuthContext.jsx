/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
// import PropTypes from 'prop-types'
import { loginRequest } from '../api/auth';
import { getRequest } from '../api/admin';

export const AuthContext = createContext()

const updateTokenLocalStorage = (item) => {
  window.localStorage.setItem('token', item)
}

const deleteTokenLocalStorage = () => {
  window.localStorage.removeItem('token')
}

const token = window.localStorage.getItem('token')

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  const signIn = async (user) => {
    try {
      const res = await loginRequest(user)
      updateTokenLocalStorage(res.data.token)
      setIsAuthenticated(true)
      // setLoading(false)
    } catch (error) {
      console.log(error)
      setError(error.response.data.msg)
    }
  }

  const logout = () => {
    deleteTokenLocalStorage()
    setIsAuthenticated(false)
  }

  useEffect(() => {
    const checkLogin = async () => {
      if(!token) {
        setIsAuthenticated(false)
        setLoading(false)
        return
      }

      try {
        const res = await getRequest('validate', token)
        if(!res.data) return setIsAuthenticated(false)
        setIsAuthenticated(true)
        setUser(res.data)
        setLoading(false)
      } catch (error) {
        setIsAuthenticated(false)
        setLoading(false)
      }
    }
    checkLogin()
  }, [])

  return (
    <AuthContext.Provider 
      value={{
        signIn,
        logout,
        isAuthenticated,
        user,
        loading,
        error
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}

// AuthProvider.propTypes = {
//   children: PropTypes.object
// }

