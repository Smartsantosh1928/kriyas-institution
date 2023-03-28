import  { Home }  from "./pages/home";
import { Routes,Route,Navigate } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
    <Route path="/home" exact element={<Home/>} />
    <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
    </>
  )
}

export default App
