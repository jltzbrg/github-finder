import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import NavBar from './components/layout/NavBar'
import Footer from './components/layout/Footer'
import { GithubProvider } from './context/Github/GithubContext'
import { AlertProvider } from './context/alert/AlertContext'

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between h-screen'>
            <NavBar />
            <main className='container px-3 pb-12 mx-auto'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/notfound' element={<NotFound />} />
                <Route path='/*' element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  )
}

export default App
