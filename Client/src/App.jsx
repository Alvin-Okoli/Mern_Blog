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
import Post from './page.jsx'
import CreatePage from './create.jsx'
import Card from './card.jsx'
import { FetchLink, tagFetch } from './Loader functions/loaders.jsx'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route element={<Nav/>}>
        <Route index element={<Homepage/>}></Route>
        <Route path='page/:page' element={<PostDetails/>} loader={FetchLink}></Route>
        <Route path='tag/:tag' element={<Content/>} loader={tagFetch}></Route>
        <Route path='post' element={<Post/>} ></Route>
        <Route path='create' element={<CreatePage/>}/>
        <Route path='card' element={<Card/>}/>
        <Route path='content' element={<Content/>}></Route>
      </Route>
      </> 
    )
  )
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
