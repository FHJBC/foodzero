import { ReactNode, useContext } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import { AuthContext } from "./context/AuthContext"
import Menu from './pages/menu/Menu'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
// import { About, Contact, Menu } from './pages'

function App() {

  const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { user } = useContext(AuthContext);

    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/">

            <Route path="login" element={<Login />} />

            <Route path="register" element={<Register />} />

            <Route
              index
              element={
                  <Home />
              }
            />

            <Route
                path="menu"
                element={
                  <Menu />
                }
            />

            <Route
                path="about"
                element={
                  <About />
                }
            />

            <Route
                path="contact"
                element={
                  <Contact />
                }
            />

          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
