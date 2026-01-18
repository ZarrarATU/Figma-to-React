import { useEffect, useState } from 'react'
import './HeroSlider.css'

function HeroSlider() {

    let images = [
        {
            desktop: '/public/images/Homepage-Promo-Meet-Model-Y-Desktop.jpg',
            phone: '/public/images/Homepage-Promo-Meet-Model-Y-Mobile.jpg',
            heading: 'ModelY',
            des: '0% APR Available',
            id: '#34322'
        },

        {
            desktop: '/public/images/Homepage-Promo-Model-3-Desktop-US-CA-MX.jpg',
            phone: '/public/images/Homepage-Promo-Model-3-Mobile-US-CA-MX.jpg',
            heading: 'Model3',
            des: '2.99% APR Available',
            id: '#43545'
        },
    ]

    useEffect(()=>{
        let id = setInterval(()=>{
            handleNext()
        },5000)

        return ()=>clearInterval(id)
    },[])

    const isMobile = window.innerWidth <= 768
    let [active, setActive] = useState(0)

    function handlePrev() {
        setActive(prev => prev === 0 ? images.length - 1 : prev - 1)
    }


    function handleNext() {
         setActive(prev => (prev === images.length - 1 ? 0 : prev + 1))
    }

    return (
        <div className='hero-slider'>
            <div className="hero-slider-images">

                <div className="hero-slider-btns">
                    <button onClick={handlePrev} className="hero-prev">
                        <img src="/public/images/prev.svg" alt="prev" />
                    </button>
                    <button onClick={handleNext} className="hero-next">
                        <img src="/public/images/next.svg" alt="next" />
                    </button>
                </div>


                {images.map((img, index) => {
                    return <div key={img.id} className={`hero-img ${index === active ? 'active' : ''}`}>
                        <img src={isMobile ? img.phone : img.desktop} />
                        <div className="hero-text">
                            <h5 className="hero-heading">{img.heading}</h5>
                            <p className="hero-des">{img.des}</p>
                            <div className="hero-buttons">
                                <button className="hero-order">Order Now</button>
                                <button className="hero-view-inv">View Inventory</button>
                            </div>

                        </div>
                    </div>
                })}
            </div>
            {/* <button onClick={handleSlider}>turn</button> */}
        </div>
    )
}

export default HeroSlider