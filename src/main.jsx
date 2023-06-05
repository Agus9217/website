import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { theme } from './styles/theme'
import { RouterProvider } from 'react-router-dom'
import { initRoute } from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={initRoute} />
    </ChakraProvider>
  </React.StrictMode>,
)
