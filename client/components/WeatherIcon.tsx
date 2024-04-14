import { useQuery } from '@tanstack/react-query'
import { getWeather } from '../apis/weather'

function WeatherIcon() {
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
    <div className="mx-auto w-80 max-w-xs">
      <img
        className="w-full object-contain"
        src={`icons/big/${data.current.icon_num}.png`}
        alt={data.current.icon}
      />
    </div>
  )
}

export default WeatherIcon
