import { createBrowserRouter } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import WeatherCurrent from './components/WeatherCurrent'
import Location from './components/Location'
import WidgetForecast from './components/WidgetForecast'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'current',
        element: <WeatherCurrent />,
      },
      {
        path: 'location',
        element: <Location />,
      },
      {
        path: 'forecast',
        element: <WidgetForecast />,
      },
    ],
  },
])

export default router
