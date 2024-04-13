import { useEffect, useState } from 'react'
import WeatherDemo from './WeatherDemo'
import WidgetForecast from './WidgetForecast'
import Toggle from './Toggle'

const desktopImage = '/images/a3.png'
const mobileImage = '/images/a6.png'

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [backgroundColor, setBackgroundColor] = useState('bg-blue-300')
  const imageUrl = windowWidth >= 850 ? desktopImage : mobileImage

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <>
      <div
        className={`m-5 ${backgroundColor} bg-[url('${imageUrl}')] bg-contain bg-top bg-no-repeat p-10`}
      >
        <Toggle setBackgroundColor={setBackgroundColor} />
        <WeatherDemo />
        <WidgetForecast />
      </div>
    </>
  )
}

export default Home
