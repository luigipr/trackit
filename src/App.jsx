import { useState } from "react"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
import HabitsPage from "./pages/HabitsPage"
import TodayPage from "./pages/TodayPage"
import HistoryPage from "./pages/HistoryPage"
import ResetStyle from "./style/ResetStyle"
import { BrowserRouter, Routes, Route } from "react-router-dom";





export default function App() {

  const [token, setToken] = useState('');


  return (
      <>
          <BrowserRouter>
            <ResetStyle />

              <Routes>
              <Route path="/" element={<LoginPage setToken={setToken} />} />
              <Route path="/cadastro" element={<SignUpPage />} />
              <Route path='/habitos' element={<HabitsPage token={token}/>} />
              <Route path='/hoje' element={<TodayPage token={token}/>} />
              <Route path='/historico' element={<HistoryPage token={token}/>} />
              </Routes>

              
          </BrowserRouter>
      </>
  )
}
