//Dependencies
import { createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

import './App.css'

//Components
import Nav from './Components/nav.jsx'
import Homepage from './Components/Homepage.jsx'
import PostDetails from './Components/PostDetails.jsx'
import Content from './Components/content.jsx'
import CreatePage from './Components/create.jsx'
import { FetchLink, tagFetch } from './Loader functions/loaders.jsx'
import IsAdmin from './Routeprotection/AdminProtection.jsx'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route element={<Nav/>}>
        <Route index element={<Homepage/>}></Route>
        <Route path='page/:page' element={<PostDetails/>} loader={FetchLink}></Route>
        <Route path='tag/:tag' element={<Content/>} loader={tagFetch}></Route>

        <Route path='*' element={<h1 className='text-3xl text-center'>404 Not Found</h1>}></Route>
      </Route>
      </> 
    )
  )
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
