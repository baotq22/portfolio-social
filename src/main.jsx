import { React } from 'react'
import ReactDOM from 'react-dom/client'
import '../src/assets/css/sb-admin-2.min.css'
import '../src/scss/App.scss'
import App from './pages/App.jsx'
import MemoryGame from './pages/MemoryGame.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AppLayout } from './components/index.js'

function Main() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<App />} />
            <Route path='/memory-game' element={<MemoryGame />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(
  <Main />
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  </React.StrictMode>,
)