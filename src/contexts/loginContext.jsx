import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const loginContext = createContext();
  
export const LoginContextProvider = ({ children }) => {

  const [user, setUser] = useState({
    user: '',
    pwd: ''
  })

  const [error, setError] = useState('')

  const [authenticated, setAuthenticated ] = useState(false);
  

  useEffect(()=>{
    const validationToken = localStorage.getItem('token')

    if (!validationToken) {
      setUser((prevState) => ({...prevState, user: ''}))
      setUser((prevState) => ({...prevState, pwd: ''}))
      setAuthenticated(false)
      localStorage.removeItem('token')
    }
 
  },[authenticated])

  const login = async (user, pwd) => {

    const loginTry = { user: user, pwd: pwd}

    if ((loginTry.user !== '' || null) && (loginTry.pwd !== '' || null)) {
      try {
        const res = await axios.post("login", loginTry)
  
        localStorage.setItem("token", res.data.token);
  
        setAuthenticated(true)
        
      } catch (error) {
        setError("Invalid Password and/or Email. Try again!")

        setTimeout(() => {

          setError('')
          setUser((prevState) => ({...prevState, user: ''}))
          setUser((prevState) => ({...prevState, pwd: ''}))

        }, 5000)
      }

      return;
    }else {
      setError('Please put some value in the fields')

      setTimeout(() => {

        setError('')

      }, 5000);
    }
  }

  const logout = async () => {
    try {

      const response = await axios.post('logout',{
        headers:{
          'x-access-token' : localStorage.getItem('token')
        }
      })
  
      setUser((prevState) => ({...prevState, user: ''}))
      setUser((prevState) => ({...prevState, pwd: ''}))
      setAuthenticated(false)
      localStorage.removeItem('token')
      
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <loginContext.Provider value={{user,setUser,error, authenticated,login,logout}}>
      {children}
    </loginContext.Provider>
  );
}
