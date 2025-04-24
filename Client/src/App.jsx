//Dependencies
import { createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

import './App.css'

//Components
import Nav from './nav'
import Homepage from './Homepage.jsx'
import PostDetails from './PostDetails.jsx'
import Content from './content.jsx'
import CreatePage from './create.jsx'
import { FetchLink, tagFetch } from './Loader functions/loaders.jsx'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route element={<Nav/>}>
        <Route index element={<Homepage/>}></Route>
        <Route path='page/:page' element={<PostDetails/>} loader={FetchLink}></Route>
        <Route path='tag/:tag' element={<Content/>} loader={tagFetch}></Route>
        <Route path='create' element={<CreatePage/>}/>
      </Route>
      </> 
    )
  )
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
