import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import { Login } from './pages'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={Login} />
          <Route path="" element={}  />
          <Route path="" element={}  />
          <Route path="" element={}  />
        </Routes>
      </Router>
    </>
  )
}

export default App
