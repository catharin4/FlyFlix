import React, { useEffect, useState } from "react"
import axios from "axios"
import Slider from "react-slick"
import YouTube from "react-youtube"
import "./YoutubeCarousel.css"

const YouTubeCarousel = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=LqXqBgIUbJg&id=30nlBGjPRYM&id=y4ltLH9iK8E&id=Osn7jycnqkk&id=b_nygdZaN3Q&key=AIzaSyCaDq_b9-jB5qr_t2QFTFM-1ifRqV88kyQ`
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
      <Slider {...settings}>
        {videos.map((video) => (
          <div className='carousel-slide' key={video.id.videoId}>
            <h3>{video.snippet.title}</h3>
            <img
              onClick={() => handleVideoClick(video)}
              src={video.snippet.thumbnails.default.url}
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

export default YouTubeCarousel
