import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSlider from './components/HeroSlider/HeroSlider'
import Carousel from './components/Carousel/Carousel'

function App() {
  return (
    <div id='main'>
 
       <Navbar></Navbar>
       <HeroSlider></HeroSlider>
       <Carousel></Carousel>

    </div>
  )
}

export default App