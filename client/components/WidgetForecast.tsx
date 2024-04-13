// import { useQuery } from '@tanstack/react-query'
// import { getWeather } from '../apis/weather'

// function WidgetForecast() {
//   const { isPending, isError, data } = useQuery({
//     queryKey: ['weather'],
//     queryFn: () => getWeather(),
//   })
//   if (isError) {
//     return <p>Something went wrong</p>
//   }

//   if (isPending) {
//     return <p>...Loading</p>
//   }

//   return (
//     <>
//       <div className="w-full p-8">
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {data.daily.data.map((dayData) => (
//             <div
//               key={dayData.day.toString()}
//               className="overflow-hidden rounded-lg bg-white p-4 shadow-lg"
//             >
//               <h3 className="mb-2 text-center text-lg font-bold">
//                 {String(dayData.day)}
//               </h3>
//               <div className="text-center">
//                 <p>High: {dayData.all_day.temperature_max}°C</p>
//                 <p>Low: {dayData.all_day.temperature_min}°C</p>
//                 <p>Rain: {dayData.all_day.precipitation.total}mm</p>
//               </div>
//               <p className="mt-2 text-center text-sm">{dayData.summary}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   )
// }

// export default WidgetForecast

function WidgetForecast() {
  const dummyData = {
    daily: {
      data: [
        {
          day: new Date('2024-04-14'),
          all_day: {
            temperature_max: 16,
            temperature_min: 7,
            precipitation: { total: 2 },
          },
          image: '/images/.jpg',
          summary: 'Partly cloudy throughout the day.',
        },
        {
          day: new Date('2024-04-15'),
          all_day: {
            temperature_max: 14,
            temperature_min: 5,
            precipitation: { total: 0 },
          },
          image: '/images/.jpg',
          summary: 'Mostly sunny.',
        },
        {
          day: new Date('2024-04-16'),
          all_day: {
            temperature_max: 15,
            temperature_min: 8,
            precipitation: { total: 5 },
          },
          image: '/images/.jpg',
          summary: 'Light rain in the evening and overnight.',
        },

        {
          day: new Date('2024-04-17'),
          all_day: {
            temperature_max: 13,
            temperature_min: 6,
            precipitation: { total: 1 },
          },
          image: '/images/.jpg',
          summary: 'Overcast throughout the day.',
        },
        {
          day: new Date('2024-04-18'),
          all_day: {
            temperature_max: 17,
            temperature_min: 9,
            precipitation: { total: 0 },
          },
          image: '/images/.jpg',
          summary: 'Clear sky.',
        },
        {
          day: new Date('2024-04-19'),
          all_day: {
            temperature_max: 19,
            temperature_min: 10,
            precipitation: { total: 0 },
          },
          image: '/images/.jpg',
          summary: 'Sunny with a chance of showers.',
        },
        {
          day: new Date('2024-04-20'),
          all_day: {
            temperature_max: 18,
            temperature_min: 11,
            precipitation: { total: 7 },
          },
          image: '/images/.jpg',
          summary: 'Rain in the morning.',
        },
      ],
    },
  }

  const { daily } = dummyData

  return (
    <>
      <div className="m-5 flex flex-row flex-wrap justify-center">
        {daily.data.map((dayData, index) => (
          <div
            key={index}
            className="m-6 flex rounded-xl bg-blue-200 bg-opacity-50 p-9 text-2xl font-extrabold text-gray-200 shadow-lg"
            style={{
              height: '15rem',
              width: '15rem',
              minHeight: '15rem',
              minWidth: '15rem',
              backgroundImage: `url('${dayData.image}')`,
              backgroundSize: 'cover',
            }}
          >
            <div className="pt-4 text-center">
              <h3>{dayData.day.toDateString()}</h3>
              <p className="pt-2 text-7xl">
                {dayData.all_day.temperature_max}°C
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default WidgetForecast
