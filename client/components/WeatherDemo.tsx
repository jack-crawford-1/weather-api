function WeatherDemo() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <>
      <div
        className="m-16 flex flex-col justify-end rounded-xl bg-cover p-12 text-2xl font-extrabold text-gray-200"
        style={{
          height: '40rem',
          width: '40rem',
          minHeight: '40rem',
          minWidth: '40rem',
        }}
      >
        <div className="text-left text-4xl">
          <p className="pt-3 text-6xl text-gray-200">{today}</p>
          <p className="pt-3 text-9xl">12°C</p>
          <p className="pt-2">Heavy Rain</p>
          <p className="pt-1">Cloud Coverage 70% </p>
          <p className="pt-1">Precipitation 5 mm/h</p>
          <p className="pt-1">Temperature 13°C</p>
          <p className="pt-1">Wind Angle 123°</p>
          <p className="pt-1">Wind Direction SE</p>
          <p className="pt-1">Wind Speed: 32 KPH</p>
        </div>
      </div>
    </>
  )
}

export default WeatherDemo
