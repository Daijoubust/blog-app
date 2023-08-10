import { useState } from 'react'
import './App.scss'
import { Header } from './components/header/Header'
import { BrowserRouter , Routes , Route, Navigate } from  'react-router-dom'
import { Home } from './components/page/home/Home'
import { About } from './components/page/about/About'
import { Blogs } from './components/page/blogs/Blogs'
import { Footer } from './components/footer/Footer'
import { NotFound } from './components/page/notfound/NotFound'
import { Details } from './components/page/details/Details'

export const App = () => {
  const [theme ,setTheme] = useState('light')

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <Header theme={theme} setTheme={setTheme}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/home" element={<Navigate to="/"/>}  />
          <Route path='/info' element={<Navigate to='/about'/>}/>
          <Route path='/blog/:id' element={<Details/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}
