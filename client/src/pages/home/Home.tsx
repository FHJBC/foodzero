import BlogPosts from '../../components/blogPosts/BlogPosts'
import Feature from '../../components/feature/Feature'
import Chef from '../../components/chef/Chef'
import Menu from '../../components/menu/Menu'
import Reservation from '../../components/reservation/Reservation'
import Categories from '../../components/categories/Categories'
import Testimonials from '../../components/testimonials/Testimonials'
import Header from '../../components/header/Header'
import Hero from '../../components/header/hero/Hero'
import Footer from '../../components/footer/Footer'
import './home.css'

const Home = () => {
  return (
    <>
      <Header>
        <Hero />
      </Header>
      <Menu />
      <Chef />
      <Feature />
      <BlogPosts />
      <Reservation />
      <Categories />
      <Testimonials />
      <Footer />
    </>
  )
}

export default Home