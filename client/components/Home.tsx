import { useState } from 'react'
import WidgetForecast from './WidgetForecast'
import Toggle from './Toggle'
import WeatherCurrent from './WeatherCurrent'

function Home() {
  const [backgroundColor, setBackgroundColor] = useState('bg-blue-300')

  return (
    <>
      <div
        className={`${backgroundColor} m-0 box-border h-full bg-[url('/images/a3.png')] bg-contain bg-top bg-no-repeat p-10`}
      >
        {' '}
        {/* <Header /> */}
        <span className="float-right">
          <Toggle setBackgroundColor={setBackgroundColor} />
        </span>
        <div className="">
          {' '}
          <div className="w-2/3">
            {' '}
            <WeatherCurrent />
          </div>
          <div className="w-1/3"> {/* <WeatherIcon /> */}</div>
        </div>
        <WidgetForecast />
      </div>
    </>
  )
}

export default Home
