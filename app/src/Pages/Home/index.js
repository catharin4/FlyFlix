import YoutubeCarouselFront from "../../Components/YoutubeCarousel/YoutubeCarouselFront"
import YoutubeCarouselBack from "../../Components/YoutubeCarousel/YoutubeCarouselBack"
import Header from "../../Components/Header"
import Footer from "../../Components/Footer"

function Home() {
  return (
    <>
      <Header />
      <YoutubeCarouselFront />
      <YoutubeCarouselBack />
      <Footer />
    </>
  )
}

export default Home
