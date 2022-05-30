import { ReactNode } from 'react'
import './header.css'
import Hero from './hero/Hero'
import Navigation from './navigation/Navigation'

const Header = ({children}: {children: ReactNode}) => {
  return (
    <header>
        <Navigation />
        {children}
    </header>
  )
}

export default Header