import { useQuery } from '@tanstack/react-query'
import { getWeather } from '../apis/weather'

function Forecast() {
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

  const formatDay = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { weekday: 'long' })
  }

  return (
    <>
      <div className="w-full p-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.daily.data.map((dayData) => (
            <div
              key={dayData.day}
              className="overflow-hidden rounded-lg bg-white p-4 shadow-lg"
            >
              <h3 className="mb-2 text-center text-lg font-bold">
                {formatDay(dayData.day)}
              </h3>

              <h3 className="mb-2 text-center text-lg font-bold">
                {dayData.day}
              </h3>
              <div className="text-center">
                <img
                  src={`/client/public/icons/small/${data.current.icon_num}.png`}
                  alt={dayData.all_day.weather}
                  className="mx-auto mb-2"
                />
                <p>High: {dayData.all_day.temperature_max}°C</p>
                <p>Low: {dayData.all_day.temperature_min}°C</p>
                <p>{dayData.all_day.weather}</p>
                <p>
                  Wind: {dayData.all_day.wind.speed} KPH{' '}
                  {dayData.all_day.wind.dir}
                </p>
                <p>Cloud Cover: {dayData.all_day.cloud_cover.total}%</p>
                <p>Rain: {dayData.all_day.precipitation.total}mm</p>
              </div>
              <p className="mt-2 text-center text-sm">{dayData.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Forecast
