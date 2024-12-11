import React, { useState } from 'react'
import './HomeYV.css'

const HomeYV = () => {
    // const [yt, setyt] = useState()
    const handlePlay = () => {
        const iframe = document.querySelector(".youtubeVideo iframe")
        iframe.src += "?autoplay=1"
        document.querySelector(".youtubeVideo img").style.visibility = 'hidden' ;
    }

    return (
        <div className='youtubeVideo'>
            <img onClick={handlePlay} src="https://www.datocms-assets.com/40521/1732010989-youtube-thumbnail.png?auto=format&dpr=0.5&w=3000" alt="" />
            <iframe src="https://www.youtube.com/embed/PMv1UcsF2no"  allow="autoplay; encrypted-media"></iframe>
        </div>
    )
}

export default HomeYV
