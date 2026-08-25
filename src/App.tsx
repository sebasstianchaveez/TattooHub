import { Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Gallery from './page/Gallery'
import TattoDetail from './page/TattooDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Gallery" element={<Gallery />} />
      <Route path="/tattoo/:id" element={<TattoDetail />} />
    </Routes>
  )
}

export default App