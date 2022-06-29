import axios from "axios";



export const loginRoute = async (props) => {


  try {
    const response = await axios.post("login", props);
    localStorage.setItem("token", response.data.token);
    console.log(response)

  } catch (e) {
    console.log(e.response.data.message)

  }
};
