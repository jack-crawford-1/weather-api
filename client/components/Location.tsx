import { getLocation } from '../apis/weather'
import { useQuery } from '@tanstack/react-query'

function Location() {
  const { isPending, isError, data } = useQuery({
    queryKey: ['location'],
    queryFn: () => getLocation(),
  })
  if (isError) {
    return <p>Something went wrong</p>
  }

  if (isPending) {
    return <p>...Loading</p>
  }

  return (
    <div>
      <p className="text-4xl">{data.adm_area1}</p>
      {/* <h2>Location details from lat/lon</h2>
      <p>{data.name}</p>
      <p>{data.adm_area2}</p>
      <p>{data.country}</p>
      <p>{data.lat}</p>
      <p> {data.lon}</p>
      <p>{data.place_id}</p>
      <p>{data.timezone}</p>
      <p>{data.type}</p> */}
    </div>
  )
}

export default Location
