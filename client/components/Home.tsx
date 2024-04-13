import { useState } from 'react'
import WidgetForecast from './WidgetForecast'
import Toggle from './Toggle'
import WeatherCurrent from './WeatherCurrent'

function Home() {
  const [backgroundColor, setBackgroundColor] = useState('bg-blue-300')

  return (
    <>
      <div
        className={`m-5 ${backgroundColor} bg-[url('/images/a3.png')] bg-contain bg-top bg-no-repeat p-10`}
      >
        <Toggle setBackgroundColor={setBackgroundColor} />
        <WeatherCurrent />
        <WidgetForecast />
      </div>
    </>
  )
}

export default Home
