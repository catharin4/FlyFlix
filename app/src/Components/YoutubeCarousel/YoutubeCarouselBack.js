import React, { useEffect, useState } from "react"
import axios from "axios"
import Slider from "react-slick"
import YouTube from "react-youtube"
import "./YoutubeCarousel.css"

const YoutubeCarouselBack = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=wXMlMsDvk2M&id=Qjk-cSW-jk4&id=BRuTnxjf2k8&id=f4vdXBJtwjA&id=PWPtyYoqZCg&key=[API_KEY]`
        )
        setVideos(response.data.items)
      } catch (error) {
        console.error("Error fetching YouTube videos:", error)
      }
    }

    fetchVideos()
  }, [])

  const handleVideoClick = (video) => {
    setSelectedVideo(video)
  }

  const handleCloseClick = () => {
    setSelectedVideo(null)
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  }

  return (
    <div>
      <p className='slide-title'>Conteúdos de Backend</p>
      <Slider {...settings}>
        {videos.map((video) => (
          <div className='carousel-slide' key={video.id.videoId}>
            <h3>{video.snippet.title}</h3>
            <img
              onClick={() => handleVideoClick(video)}
              src={video.snippet.thumbnails.standard.url}
              alt={video.snippet.title}
              loading='carregando...'
            />
          </div>
        ))}
      </Slider>
      {selectedVideo && (
        <div className='video-player'>
          <YouTube videoId={`${selectedVideo.id}`} />
          <button className='close-button' onClick={handleCloseClick}>
            Fechar Vídeo
          </button>
        </div>
      )}
    </div>
  )
}

export default YoutubeCarouselBack
