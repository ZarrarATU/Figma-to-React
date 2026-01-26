import { useRef, useState } from 'react'
import './FeaturesSection.css'

function FeaturesSection() {

   let [isVideoPlaying,setVideoStatus] = useState(false)
   let videoRef = useRef(null)


   function handleVideoPlay(){
      if(!videoRef.current) return

      if(isVideoPlaying){
         videoRef.current.pause()
         setVideoStatus(false)
      }
      else{
        videoRef.current.play()
        setVideoStatus(true)
      }
   }

  return (
    <div className='features-section'>
        <div className="features-video">
           <video ref={videoRef} autoPlay loop src="/public/videos/Electric Cars, Solar & Clean Energy.webm"></video>

           <div className="features-video-options">
               <div className="feature-video-text">
                    <h4>Full Self-Driving (Supervised)</h4>
                    <div className="feature-video-btns">
                      <button className="demo-drive">Demo Drive</button>
                      <button className="view-report">View Report</button>
                    </div>
               </div>
               <div className="feature-video-button">
                  <button onClick={handleVideoPlay}>
                    <img src={ isVideoPlaying ? '/public/images/play.svg' : '/public/images/pause.svg'} />
                  </button>
               </div>
           </div>
        </div>
        <div className="features-discover">
            <img src="/public/images/Homepage-Features-Desktop.jpg" />

            <div className="features-discover-text">
               <h4>Features That Come Standard</h4>
                <button>Discover</button>
            </div>

        </div>
    </div>
  )
}

export default FeaturesSection