import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

const queryClient = new QueryClient()

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('app')!)
  root.render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>,
  )
})
