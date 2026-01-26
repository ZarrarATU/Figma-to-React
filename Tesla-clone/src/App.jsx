import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSlider from './components/HeroSlider/HeroSlider'
import Carousel from './components/Carousel/Carousel'
import PromoSection from './components/PromoSection/PromoSection'
import PromoCard from './components/PromoSection/PromoCard'
import FeaturesSection from './components/FeaturesSection/FeaturesSection'
import Map from './components/Map/Map'

const promoCard = [
  {
    title: 'Current Offers',
    des: 'Explore limited-time offers on Tesla vehicles.',
    desktop: '/public/images/Homepage-Grid-Current-Offers.jpg',
    phone: '',
  },
  {
    title: 'American Heros',
    des: '$500 off for military, first responders, healthcare, teachers and students.',
    desktop: '/public/images/Homepage-Grid-American-Heroes-v2.jpg',
    phone: ''
  },
]

function App() {
  return (
    <div id='main'>
 
       <Navbar></Navbar>
       <HeroSlider></HeroSlider>
       <Carousel></Carousel>

       <PromoSection>
          <PromoCard title={promoCard[0].title} des={promoCard[0].des} img={promoCard[0].desktop}></PromoCard>
          <PromoCard title={promoCard[1].title} des={promoCard[1].des} img={promoCard[1].desktop}></PromoCard>
       </PromoSection>

       <FeaturesSection></FeaturesSection>
       <Map></Map>

    </div>
  )
}

export default App