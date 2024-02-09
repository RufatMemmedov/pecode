import 'bootstrap/dist/css/bootstrap.min.css'
import './components/Navbar'
import './App.css'
import './components/Footer'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ArticlesSection from './components/ArticlesSection'



function App() {
 

  return (
    <>
      <Navbar />
      <ArticlesSection />
      <Footer />
    </>
  )
}

export default App
