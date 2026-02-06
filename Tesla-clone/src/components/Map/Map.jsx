import { useEffect, useRef } from 'react'
import './Map.css'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

function Map() {
  let mapRef = useRef(null)
  let leafletRef = useRef(null)
  const locations = [
    {
      id: '348433',
      coords: [26.807946, 68.256580],
      store: 'Karachi Store',
      img: '/public/images/karachi.jpg',
      desc: 'Our main Karachi outlet serving Sindh region.'
    },
    {
      id: '347437',
      coords: [30.047071, 67.254998],
      store: 'Quetta Store',
      img: '/public/images/quetta.jpg',
      desc: 'Quetta branch located near the city center.'
    },
    {
      id: '475743',
      coords: [33.922249, 71.808831],
      store: 'Peshawar Store',
      img: '/public/images/peshawar.jpg',
      desc: 'Peshawar store covering KPK region.'
    },
    {
      id: '546545',
      coords: [31.528181, 74.216210],
      store: 'Lahore Store',
      img: '/public/images/lahore.jpg',
      desc: 'Flagship Lahore store for Punjab.'
    },
    {
      id: '945754',
      coords: [34.817718, 75.555168],
      store: 'Kashmir Store',
      img: '/public/images/gilgit.jpg',
      desc: 'Serving northern areas and Kashmir.'
    },
  ]


  useEffect(() => {

    if (leafletRef.current) return;


    leafletRef.current = L.map(mapRef.current, {
      center: [31.122784, 70.652145],
      zoom: 5,
      gestureHandling: true
    })

    let TilePng = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'


    let tileLayer = L.tileLayer(TilePng, { attribution: 'OpenStreet contributor' })

    tileLayer.addTo(leafletRef.current)

    let locIcon = L.divIcon({
      html: `
    <div class="loc-wrapper">
      <div class="loc-ani-1"></div>
      <div class="loc-icon"></div>
    </div>
  `,
      className: '',
      iconSize: [4, 4],
      iconAnchor: [10, 10]
    })


    locations.forEach(loc => {

      const popupHTML = `
    <div class="popup-card">
      <img src="${loc.img}" alt="${loc.store}" />
      <h4>${loc.store}</h4>
      <p>${loc.desc}</p>
    </div>
  `

      let marker = L.marker(loc.coords, { icon: locIcon });
      marker.addTo(leafletRef.current).bindPopup(popupHTML, {
        closeButton: true,
        maxWidth: 260,
        className: 'custom-popup'
      })
    })



    return () => {
      leafletRef.current?.remove()
      leafletRef.current = null
    }

  }, [])

  return (
    <div className='map-div'>
      <div ref={mapRef} id='map' className="map">
      </div>

      <div className="map-stores">
        <h5 className='find-your-charge'>Find Your Charge</h5>
        <p className="charge-para">View the network of Tesla Superchargers and Destination Chargers available near you.</p>
        <div className="map-stores-btns">
          <button className='view-network'>View Network</button>
          <button className='stores-learn-more'>Learn More</button>
          <img className='charge-img' src="/public/images/charge.svg" />
        </div>
      </div>


    </div>
  )
}

export default Map