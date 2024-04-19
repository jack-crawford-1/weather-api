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
    return <p></p>
  }

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <>
      <div
        className="m-10 flex flex-col justify-start rounded-xl bg-cover  p-2 text-2xl font-bold tracking-wide text-white"
        style={{
          height: 'fit-content',
          width: 'fit-content',
          minHeight: '20rem',
          minWidth: '20rem',
        }}
      >
        <div className="p-3 text-left text-xl">
          <img
            src={`icons/big/${data.current.icon_num}.png`}
            alt={data.current.icon}
          />
          <h1 className="font-rubik-mono">{<Location />}</h1>
          <p className=" pt-3 text-3xl">{today}</p>
          <p className="pt-3 text-5xl">{data.current.temperature}°C</p>
          <p className="pt-2">{data.current.summary}</p>
          <p className="pt-1">Cloud Cover: {data.current.cloud_cover}% </p>
          <p className="pt-1">
            Rain Total: {data.current.precipitation.total}mm/h
          </p>
          <p className="pt-1">Wind Angle: {data.current.wind.angle}°</p>
          <p className="pt-1"> Wind Direction: {data.current.wind.dir}</p>
          <p className="pt-1">Wind Speed: {data.current.wind.speed} km/h</p>
          <p>Elevation: {data.elevation} m</p>
        </div>
      </div>
    </>
  )
}

export default WeatherCurrent
