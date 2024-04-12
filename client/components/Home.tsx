import { Link } from 'react-router-dom'
import WeatherCurrent from './WeatherCurrent'

function Home() {
  return (
    <>
      <div>
        <p>Home</p>
        <Link to={'/current'}>current weather</Link>
        <Link to={'/forecast'}>7 day forecast</Link>
      </div>
    </>
  )
}

export default Home
