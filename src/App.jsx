import './App.css'
import OurFeatures from './pages/ourFeatures/OurFeatures'
import Header from './components/organisms/Header'
import Home from './pages/Home/Home'
import OurServices from './pages/OurServices/OurServices'
import Signup from './pages/Auth/Signup/Signup'
function App() {

  return (
    <>
     <Header>
     </Header>
     <Home/>
     <OurFeatures />
     <OurServices/>
    </>
  )
}

export default App
