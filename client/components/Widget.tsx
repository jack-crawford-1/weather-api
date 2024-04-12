import { useQuery } from '@tanstack/react-query'
import { getWeather } from '../apis/weather'

function Widget() {
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
      <div
        className="m-16 flex flex-col justify-end rounded-xl  bg-[url('/images/c.jpg')] bg-cover p-12 text-2xl font-extrabold text-gray-200"
        style={{
          height: '30rem',
          width: '30rem',
          minHeight: '30rem',
          minWidth: '30rem',
        }}
      >
        <div className="m-5">
          <p className="pt-5 text-9xl">{data.current.temperature}C</p>
          <p className="pt-2">Current Weather: {data.current.summary}</p>
        </div>
      </div>
    </>
  )
}
export default Widget
