// routes.tsx
import { createBrowserRouter, Route } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'
import WeatherCurrent from './components/WeatherCurrent'
import WeatherDaily from './components/WeatherDaily'
import WeatherDemo from './components/WeatherDemo'

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
        path: 'forecast',
        element: <WeatherDaily />,
      },
      {
        path: 'demo',
        element: <WeatherDemo />,
      },
    ],
  },
])

export default router
