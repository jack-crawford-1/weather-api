// routes.tsx
import { createBrowserRouter } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import WeatherCurrent from './components/WeatherCurrent'
import Forecast from './components/Forecast'
import WeatherDemo from './components/WeatherDemo'
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
      // {
      //   path: 'forecast',
      //   element: <Forecast />,
      // },
      {
        path: 'demo',
        element: <WeatherDemo />,
      },
      {
        path: 'forecast',
        element: <WidgetForecast />,
      },
    ],
  },
])

export default router
