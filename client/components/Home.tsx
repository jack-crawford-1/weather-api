import { useState } from 'react'
import WidgetForecast from './WidgetForecast'
import Toggle from './Toggle'
import WeatherCurrent from './WeatherCurrent'

function Home() {
  const [backgroundColor, setBackgroundColor] = useState('bg-blue-400')

  return (
    <>
      <div
        className={`${backgroundColor} m-0 box-border h-full bg-[url('/images/a3.png')] bg-contain bg-top bg-no-repeat p-1`}
      >
        <span className="float-right">
          <Toggle setBackgroundColor={setBackgroundColor} />
        </span>
        <div className="flex flex-col content-center">
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
