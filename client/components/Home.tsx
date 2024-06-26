import { useState } from 'react'
import WidgetForecast from './WidgetForecast'
import Toggle from './Toggle'
import WeatherCurrent from './WeatherCurrent'
import { Link } from 'react-router-dom'

function Home() {
  const [backgroundColor, setBackgroundColor] = useState('bg-blue-400')
  const [backgroundImage, setBackgroundImage] = useState('url(/images/a3.png)')
  const backgroundSize = backgroundImage.includes('a6.png') ? '30%' : 'contain'

  return (
    <>
      <div
        className={`${backgroundColor}  m-0 box-border h-full bg-contain bg-top bg-no-repeat p-10`}
        style={{
          backgroundImage: backgroundImage,
          backgroundSize: backgroundSize,
        }}
      >
        <span className="float-right">
          <Toggle
            setBackgroundColor={setBackgroundColor}
            setBackgroundImage={setBackgroundImage}
          />
        </span>
        <Link to="/about" className="font-rubik-mono text-2xl text-gray-200">
          About
        </Link>
        <div className="m-10 font-rubik">
          <div>
            <WeatherCurrent />
            <WidgetForecast />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
