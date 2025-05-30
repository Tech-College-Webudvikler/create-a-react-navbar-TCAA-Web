import { BrowserRouter, Route, Routes } from 'react-router'
import { Navigation } from './components/Navigation/Navigation'

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<div>Home Page</div>} />
        <Route path='/about' element={<div>About Page</div>} />
        <Route path='/contact' element={<div>Contact Page</div>} />
        <Route path='/services' element={<div>Services Page</div>} />
        <Route path='/blog' element={<div>Blog Page</div>} />
        <Route path='*' element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
