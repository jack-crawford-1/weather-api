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

  return (
    <>
      <div className="">
        {data.daily.data.map((icon, index) => (
          <div key={index}>
            <img
              className="h-10 w-10"
              src={`icons/big/${data.current.icon_num}.png`}
              alt={data.current.icon}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default WidgetIcons
