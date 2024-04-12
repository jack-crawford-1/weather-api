import { useQuery } from '@tanstack/react-query'
import { getWeather } from '../apis/weather'

function WeatherCurrent() {
  const { isPending, isError, data } = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather(),
  })
  if (isError) {
    return <p>Something went wrong</p>
  }

  if (isPending) {
    return <p>...Loading</p>
  }

  console.log(data.daily)

  return (
    <>
      <div
        className="  m-6 rounded-xl border-8 border-black bg-[url('/images/a.jpg')] p-5 font-mono text-2xl text-gray-200 "
        style={{
          height: '30rem',
          width: '30rem',
          minHeight: '30rem',
          minWidth: '30rem',
        }}
      >
        <img
          src={`icons/big/${data.current.icon_num}.png`}
          alt={data.current.icon}
        />
        <p>Current Weather: {data.current.summary}</p>
        <p>Cloud Coverage: {data.current.cloud_cover}% </p>
        <p>Precipitation: {data.current.precipitation.total}mm/h</p>
        <p>Temperature: {data.current.temperature}°C</p>
        <p>Wind Angle: {data.current.wind.angle}°</p>
        <p>Wind Direction: {data.current.wind.dir}</p>
        <p>Wind Speed: {data.current.wind.speed} KPH</p>
      </div>
    </>
  )
}

export default WeatherCurrent
