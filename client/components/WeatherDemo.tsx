function WeatherDemo() {
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
          <p className="pt-5 text-9xl">12°C</p>
          <p className="pt-2">Heavy Rain</p>
        </div>
      </div>
    </>
  )
}

export default WeatherDemo
