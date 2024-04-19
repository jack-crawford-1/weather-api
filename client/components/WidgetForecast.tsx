import { useQuery } from '@tanstack/react-query'
import { getWeather } from '../apis/weather'

function WidgetForecast() {
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

  return (
    <div className="flex flex-col flex-wrap justify-center md:flex-row ">
      {data.daily.data.map((dayData, index) => {
        const dateObject = new Date(dayData.day)
        const iconNum = dayData.all_day.icon

        return (
          <div
            key={index}
            className="m-1 w-full items-center rounded-2xl bg-blue-500 bg-opacity-50 p-2 font-rubik font-bold text-white shadow-lg md:w-auto md:min-w-0"
            style={{
              height: 'fit-content',
              minHeight: '6rem',
            }}
          >
            <div className="pt-4 text-left">
              <h3 className="text-center">{dateObject.toDateString()}</h3>
              <div className="flex flex-row content-center justify-center">
                <img
                  className="m-1 h-12 w-12"
                  src={`icons/medium/${iconNum}.png`}
                  alt={`Weather icon number ${iconNum}`}
                />
                <div>
                  <p className="pt-2 text-sm">
                    {dayData.all_day.temperature_min} /
                    {dayData.all_day.temperature_max}°C
                  </p>
                  <p className="text-sm">
                    Rain: {dayData.all_day.precipitation.total} mm
                  </p>
                  <p className="mb-1 text-sm">
                    Wind: {dayData.all_day.wind.speed} km/h
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default WidgetForecast
