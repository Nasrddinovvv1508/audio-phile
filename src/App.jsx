import { RouterProvider, createBrowserRouter } from "react-router-dom"
import MainLayout from "./layout/MainLayout"

// pages
import { Home, Headphones, Speakers, Earphones } from './pages';

function App() {
  let roures = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [{
        index: true,
        element: <Home />
      },
      {
        path: `/headphones`,
        element: <Headphones />
      },
      {
        path: `/speakers`,
        element: <Speakers />
      },
      {
        path: `/earphones`,
        element: <Earphones />
      },
      ],
    }
  ])

  return <RouterProvider router={roures} />
}

export default App