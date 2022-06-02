import './register.css'
import FormInput from './formInput/FormInput'
import { useState } from 'react'

const Register = () => {

  const [values, setValues] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: ""
    }
  )

  const inputs = [
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

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const data = new FormData(e.target)
    console.log(Object.fromEntries(data.entries()));
  }

  const handleChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.targer.value })
  }

  return (
    <div className="register">
      <h1 className="register__title">Register</h1>
      <form onSubmit={handleSubmit}>
        <>
          {
            inputs.map((input) => { 
                <FormInput focused="" key={input.id} {...input} value={input.name} onChange={handleChange} />
            })
          }
          <button className="register__btn">Submit</button>
        </>
      </form>
    </div>
  )
}

export default Register