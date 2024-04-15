import { useQuery } from '@tanstack/react-query'
import { getWeather } from '../apis/weather'

function WidgetIcons() {
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
      <div className="index-1 align-center flex flex-row flex-wrap justify-center">
        {data.daily.data.map((dayData, index) => {
          const iconNum = dayData.all_day.icon

          return (
            <div key={index} className="h-auto">
              <div className="h-auto">
                <img
                  src={`icons/big/${iconNum}.png`}
                  alt={`Weather icon number ${iconNum}`}
                  className="h-32 w-32"
                />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default WidgetIcons
