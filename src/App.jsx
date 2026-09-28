import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Experiance from './components/Experiance'
import Services from './components/Services'
import Skill from './components/Skill'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import { LivePreviewProvider } from './components/LivePreview'

function App() {
  return (
    <LivePreviewProvider>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experiance/>
      <Services/>
      <Skill/>
      <Contacts/>
      <Footer/>
    </LivePreviewProvider>
  )
}

export default App
