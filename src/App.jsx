import About from './container/About/About'
import Footer from './container/Footer/Footer'
import Header from './container/Header/Header'
import Skills from './container/Skills/Skills'
import Work from './container/Work/Work'
import Testimonials from './container/Testimonials/Testimonials'
import Navbar from './components/Navbar'


function App() {

  return (
   <div className='bg-blue-50'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
   </div>
  )
}

export default App
