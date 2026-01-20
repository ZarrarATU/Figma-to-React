import { useRef, useState } from 'react'
import './Carousel.css'

function Carousel() {

  const carousel = [
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

  let [index, setIndex] = useState(0)
  const isMobile = window.innerWidth <= 768

  function handleNext() {
    if (index !== carousel.length - 1) {
      setIndex(i => i + 1)
    }
  }

  function handlePrev() {
    if (index !== 0) {
      setIndex(i => i - 1)
    }
  }

  function handleTab(index) {
    setIndex(index)
  }

  let touchStartX = useRef(0)
  let touchEndX = useRef(0)

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
    // console.log(touchStartX.current, ' start');

  }

  function handleTouchMove(e) {
    touchEndX.current = e.touches[0].clientX
    // console.log(touchEndX.current, ' move');
  }

  function handleTouchEnd() {
     const diff = touchStartX.current - touchEndX.current

     if(Math.abs(diff) < 50) return

     if(diff > 0){
       handleNext()
     }
     else{
      handlePrev()
     }
     
     
     
  }


  return (
    <div className='carousel'>
      <div
        onTouchMove={handleTouchMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ transform: `translateX(${index * -100}%)` }}
        className="carousel-images"
      >
        {carousel.map(img => {
          return <div key={img.id} className="carousel-img">
            <img src={isMobile ? img.phone : img.desktop} />
            <div className="carousel-text">

              <div className="carousel-name">
                <p>{img.name}</p>
              </div>
              <div className="carousel-info">
                <h4 className="carousel-title">{img.title}</h4>
                <p className="carousel-des">{img.des}</p>

                <div className="carousel-btns">
                  <button className="carousel-order-now">Order Now</button>
                  <button className="carousel-learn-more">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        })}

      </div>

      <div className="carousel-slider">
        <button onClick={handlePrev} className="carousel-prev">
          <img src="/public/images/prev.svg" alt="prev" />
        </button>
        <button onClick={handleNext} className="carousel-next">
          <img src="/public/images/next.svg" alt="next" />
        </button>
      </div>

      <div className="carousel-tabs">
        {carousel.map((_, i) => {
          return <button className={`carousel-tab ${index === i ? 'active-tab' : null}`} key={i} onClick={() => handleTab(i)}>

          </button>
        })}
      </div>
    </div>
  )
}

export default Carousel