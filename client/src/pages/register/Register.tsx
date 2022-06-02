import './register.css'
import FormInput from './formInput/FormInput'
import React, { ReactElement, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

interface InputAttribute {
  id: number,
  name: string,
  type: string,
  placeholder: string,
  errorMessage: string,
  label: string,
  pattern?: string,
  required?: true
}

interface UserInfo {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  password: string,
  confirmPassword: string
}

const Register = () => {

  const navigate = useNavigate()

  const [values, setValues] = useState<UserInfo>(
    {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: ""
    }
  )

  const inputAttributes: InputAttribute[] = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      errorMessage: "First Name should be 3-16 characters and shouldn't include any special character!",
      label: "First Name",
      pattern: "^[A-Za-z0-9]{3,16}",
      required: true
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      errorMessage: "Last Name should be 3-16 characters and shouldn't include any special character!",
      label: "Last Name"
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true
    },
    {
      id: 4,
      name: "phone",
      type: "text",
      placeholder: "Phone",
      errorMessage: "",
      label: "Phone",
      required:true
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number, and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Password don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true
    }
  ]


  const getValue = (keyName: string, array: any = []): string => {
    return array[keyName]
  }
  

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    // const data = new FormData(e.target)
    // console.log(Object.fromEntries(data.entries()));

    // console.log(values);

    try {
      const res = await axios.post('/auth/register', values)
      setValues(
        {
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: ""
        }
      )

      navigate("/menus")
    } catch (error) {
      console.log(error)
    }
    
  }

  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const inputs: ReactElement[] = []

  inputAttributes.forEach((input) => {
        inputs.push(<FormInput key={input.id} {...input} value={getValue(input.name, values)} onChange={handleChange} />)
  })


  return (
    <div className="register">
      <form className="register__form" onSubmit={handleSubmit}>
      <h1 className="register__title">Register</h1>
        <React.Fragment>
          {
            inputs
          }
        </React.Fragment>
        <button className="register__btn">Submit</button>
      </form>
    </div>
  )
}

export default Register