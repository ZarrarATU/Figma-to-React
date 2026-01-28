import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSlider from './components/HeroSlider/HeroSlider'
import Carousel from './components/Carousel/Carousel'
import PromoSection from './components/PromoSection/PromoSection'
import PromoCard from './components/PromoSection/PromoCard'
import FeaturesSection from './components/FeaturesSection/FeaturesSection'
import Map from './components/Map/Map'
import Footer from './components/Footer/Footer'

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

const carsData = [
  {
    desktop: '/public/images/Homepage-carousel-desktop-model-y.jpg',
    phone: '/public/images/Homepage-Card-Model-Y-Performance-Mobile-NA.jpg',
    name: 'Midsize SUV',
    title: 'Model Y',
    des: '',
    id: '523432'
  },
  {
    desktop: '/public/images/Homepage-carousel-desktop-model-3.jpg',
    phone: '/public/images/Homepage-Card-Model-3-Mobile-US-v2.jpg',
    name: 'Sport Sedan',
    title: 'Model 3',
    des: '',
    id: '5223432'
  },
  {
    desktop: '/public/images/Homepage-carousel-desktop-cyber-truck.jpg',
    phone: '/public/images/Homepage-Card-Cybertruck-Mobile-US-v3.jpg',
    name: 'Utility Truck',
    title: 'Cyber Truck',
    des: '3.99% APR Available',
    id: '5234323'
  },
  {
    desktop: '/public/images/Homepage-carousel-desktop-model-X.jpg',
    phone: '/public/images/Homepage-Card-Model-X-New-Mobile-US-v4.jpg',
    name: 'Luxury SUV',
    title: 'Model X',
    des: '3.99% APR Available',
    id: '4523432'
  },
  {
    desktop: '/public/images/Homepage-carousel-desktop-model-S.jpg',
    phone: '/public/images/Homepage-Card-Model-S-Mobile-US-v3.jpg',
    name: 'Luxury Sedan',
    title: 'Model S',
    des: '3.99% APR Available',
    id: '523434432'
  },

]

const solarsData = [
  {
    desktop: '/public/images/Homepage-Card-Solar-Panels-Desktop-v2.jpg',
    phone: '/public/images/Homepage-Card-Solar-Panels-Mobile-v2.jpg',
    name: '',
    title: 'Solar Panels',
    des: 'Power Your Home and Reduce Your Electricity Bill',
    id: '523432'
  },
  {
    desktop: '/public/images/Homepage-Card-Powerwall-Desktop.jpg',
    phone: '/public/images/Homepage-Card-Powerwall-Mobile.jpg',
    name: '',
    title: 'Powerwall',
    des: 'Keep Your Lights On During Outages',
    id: '5223432'
  },
  {
    desktop: '/public/images/Homepage-Card-Megapack-Desktop-v2.jpg',
    phone: '/public/images/Homepage-Card-Megapack-Mobile-v2.jpg',
    name: '',
    title: 'Megapack',
    des: 'Massive Batteries for Massive Energy Support',
    id: '5234323'
  },
  {
    desktop: '/public/images/Homepage-Card-Solar-Roof-Desktop-v2.jpg',
    phone: '/public/images/Homepage-Card-Solar-Roof-Mobile-v2.jpg',
    name: '',
    title: 'Solar Roof',
    des: 'Generate Clean Energy With Your Roof',
    id: '4523432'
  },

]

function App() {
  return (
    <div id='main'>

      <Navbar></Navbar>
      <HeroSlider></HeroSlider>
      <Carousel carousel={carsData}></Carousel>

      <PromoSection>
        <PromoCard title={promoCard[0].title} des={promoCard[0].des} img={promoCard[0].desktop}></PromoCard>
        <PromoCard title={promoCard[1].title} des={promoCard[1].des} img={promoCard[1].desktop}></PromoCard>
      </PromoSection>

      <FeaturesSection></FeaturesSection>
      <Map></Map>
      <Carousel carousel={solarsData}></Carousel>
      <Footer></Footer>

    </div>
  )
}

export default App