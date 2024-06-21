import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import TestPage from './pages/Test'
import PracticePage from './pages/Practice'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/test" Component={TestPage} />
        <Route path="/practice" Component={PracticePage} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
