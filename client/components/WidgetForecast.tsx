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

  console.log(data.daily.data)
  return (
    <>
      <div className="index-1 align-start flex flex-row flex-wrap justify-center">
        {data.daily.data.map((dayData, index) => {
          const dateObject = new Date(dayData.day)
          const iconNum = dayData.all_day.icon

          return (
            <div
              key={index}
              className=" m-0.5 mb-10 items-center rounded-xl bg-blue-200 bg-opacity-20 p-2 font-extrabold text-gray-200 shadow-lg"
              style={{
                height: '10rem',
                width: '10rem',
                minHeight: '10rem',
                minWidth: '10rem',
              }}
            >
              <div className="pt-4 text-left">
                <h3>{dateObject.toDateString()}</h3>{' '}
                <p className="pt-2">
                  {dayData.all_day.temperature_min} /{' '}
                  {dayData.all_day.temperature_max}°C
                </p>
                <div className="flex flex-row">
                  <img
                    src={`icons/medium/${iconNum}.png`}
                    alt={`Weather icon number ${iconNum}`}
                  />
                  <div>
                    <p className="text-sm">
                      Rain: {dayData.all_day.precipitation.total} mm
                    </p>
                    <p className="text-sm">
                      Wind: {dayData.all_day.wind.speed} KM/H
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default WidgetForecast
