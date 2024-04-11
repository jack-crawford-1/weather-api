import { useQuery } from '@tanstack/react-query'
import { getWeather } from '../apis/weather'

function WeatherInfo() {
  const { isPending, isError, data } = useQuery({
    queryKey: ['swmovies'],
    queryFn: () => getWeather(),
  })
  if (isError) {
    return <p>Something went wrong</p>
  }

  if (isPending) {
    return <p>...Loading</p>
  }

  return (
    <>
      <div className="w-100 m-8 flex border-solid border-red-600 p-5 ">
        <h2>Wellington Day Weather Data</h2>
        <div className="w-100  m-5 p-5 font-mono text-lg leading-8 antialiased">
          <img
            src={`/client/public/icons/big/${data.current.icon_num}.png`}
            alt={data.current.icon}
          />

          <p>Current Weather: {data.current.summary}</p>
          <p>Cloud Coverage: {data.current.cloud_cover}% </p>
          <img
            src={`/client/public/icons/small/${data.current.icon_num}.png`}
            alt={data.current.icon}
          />
          <p>Precipitation: {data.current.precipitation.type}</p>
          <p>Temperature: {data.current.temperature}°C</p>
          <p>Wind Angle: {data.current.wind.angle}°</p>
          <p>Wind Direction: {data.current.wind.dir}</p>
          <p>Wind Speed: {data.current.wind.speed} KPH</p>
        </div>
      </div>
    </>
  )
}

export default WeatherInfo
