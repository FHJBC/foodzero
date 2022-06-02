import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import "./login.css"
import "../register/formInput/formInput.css"

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
      <form className="login__form">
      <h1 className="login__title">Login</h1>
        
        <div className="formInput">
          <label>E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Your Email Address"
            onChange={handleChange}
            className="login__input"
          />
          {error && <span>{error.message}</span>}
        </div>
        <div className="formInput">
            <label>Password</label>
            <input
              id="password"
              type="password"
              placeholder="Your Password"
              onChange={handleChange}
              className="login__input"
            />
            {error && <span>{error.message}</span>}
        </div>
        <button disabled={loading} onClick={handleClick} className="login__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
