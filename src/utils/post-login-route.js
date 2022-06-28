import axios from "axios";
import { useNavigate } from 'react-router-dom'

import { useEffect } from 'react'
let navigate = useNavigate()

export const loginRoute = async (props) => {
  
  useEffect(()=>{
    navigate("/index")
  
  })

  try {
    const response = await axios.post("login", props);
    localStorage.setItem("token", response.data.token);
    return true;
  } catch (e) {
    console.log(e.response.data.message)

  }
};
