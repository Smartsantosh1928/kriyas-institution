import  { Home }  from "./pages/home";
import   Upload   from "./pages/upload";
import Signup from "./pages/sign-up";
import { Routes,Route,Navigate } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
    <Route path="/home" exact element={<Home/>} />
    <Route path="*" element={<Navigate to="/home" replace />} />
    <Route path="/signup" element={<Signup/>} />
    <Route path="/upload" element={<Upload/>} />
    <Route path="/upload" element={<Navigate to="/signup" replace />} />
    </Routes>
    </>
  )
}

export default App
