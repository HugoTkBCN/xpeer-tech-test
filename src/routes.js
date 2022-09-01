import Layout from './components/Layout'
import MainPage from './pages/Mainpage'
import Character from './pages/Character'
import NotFound from './pages/NotFound'
import { Navigate } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/character/:id', element: <Character /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
]

export default routes;