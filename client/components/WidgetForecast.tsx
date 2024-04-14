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

  console.log(data)
  return (
    <>
      <div className="index-1 align-center m-5 flex flex-row flex-wrap justify-center">
        {data.daily.data.map((dayData, index) => {
          const dateObject = new Date(dayData.day)

          return (
            <div
              key={index}
              className=" m-0.5 items-center rounded-xl bg-blue-200 bg-opacity-50 p-6 text-xl font-extrabold text-gray-200 shadow-lg"
              style={{
                height: '15rem',
                width: '15rem',
                minHeight: '15rem',
                minWidth: '15rem',
              }}
            >
              <div className="pt-4 text-center">
                <h3>{dateObject.toDateString()}</h3>{' '}
                <p className="pt-2 text-6xl">
                  {dayData.all_day.temperature_max}°C
                </p>
                <p>
                  {dayData.all_day.wind.dir} {dayData.all_day.wind.speed} KM/H
                </p>
                <img
                  src={`icons/big/${data.current.icon_num}.png`}
                  alt={data.current.icon}
                />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default WidgetForecast
