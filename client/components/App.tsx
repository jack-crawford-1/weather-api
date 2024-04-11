import { useFruits } from '../hooks/useFruits.ts'
import WeatherInfo from './WeatherDay.tsx'

function App() {
  const { data } = useFruits()

  return (
    <>
      <div className="app">
        <h1 className="text-3xl font-bold underline">
          Fullstack Boilerplate - with Fruits!
        </h1>
        <ul>{data && data.map((fruit) => <li key={fruit}>{fruit}</li>)}</ul>
        <WeatherInfo />
      </div>
    </>
  )
}

export default App
