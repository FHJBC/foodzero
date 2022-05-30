import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import "./login.css"

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  })

  const { loading, error, dispatch } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleChange = (e: any) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  const handleClick = async (e: any) => {
    e.preventDefault()
    dispatch && dispatch({ type: "LOGIN_START", payload: undefined })
    try {
      const res = await axios.post("/auth/login", credentials)
      if (res.data.isAdmin) {
        dispatch && dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details })

        navigate("/")
      } else {
        dispatch && dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
        })
      }
    } catch (err: any) {
      dispatch && dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  }

  return (
    <div className="login">
      <div className="login__container">
        <input
          id="email"
          type="text"
          placeholder="Your Email Address"
          onChange={handleChange}
          className="login__input"
        />
        <input
          id="password"
          type="password"
          placeholder="Your Password"
          onChange={handleChange}
          className="login__input"
        />
        <button disabled={loading} onClick={handleClick} className="login__button">
          Login
        </button>
        {/* {error && <span>{error.message}</span>} */}
      </div>
    </div>
  );
};

export default Login;
