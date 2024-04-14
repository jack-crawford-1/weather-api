import { useQuery } from '@tanstack/react-query'
import { getWeather } from '../apis/weather'
import Location from './Location'

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

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <>
      <div
        className=" flex flex-col justify-end rounded-xl bg-cover p-10 text-2xl font-extrabold text-gray-200"
        style={{
          height: '40rem',
          width: '40rem',
          minHeight: '40rem',
          minWidth: '40rem',
        }}
      >
        <div className="p-3 text-left font-mono text-3xl">
          <img
            src={`icons/big/${data.current.icon_num}.png`}
            alt={data.current.icon}
          />
          <h1>{<Location />}</h1>
          <p className="pt-3 text-4xl text-gray-200">{today}</p>
          <p className="pt-3 text-9xl">{data.current.temperature}°C</p>
          <p className="pt-2">{data.current.summary}</p>
          <p className="pt-1">Cloud Cover: {data.current.cloud_cover}% </p>
          <p className="pt-1">
            Rain Total: {data.current.precipitation.total}mm/h
          </p>
          <p className="pt-1">Wind Angle: {data.current.wind.angle}°</p>
          <p className="pt-1"> Wind Direction: {data.current.wind.dir}</p>
          <p className="pt-1">Wind Speed: {data.current.wind.speed} KPH</p>
          <p>Elevation: {data.elevation} m</p>
        </div>
      </div>
    </>
  )
}

export default WeatherCurrent
