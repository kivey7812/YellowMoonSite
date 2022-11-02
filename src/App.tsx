import React from 'react'
import logo from './logo.svg'
import './App.css'
import { JsxElement } from 'typescript'
import Home from './Pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Pages/About/About'
import OriginalArt from './Pages/OriginalArt/OriginalArt'
import Merch from './Pages/Merch/Merch'
import Contact from './Pages/Contact/Contact'
import Prints from './Pages/Prints/Prints'
import ReactDOM from 'react-dom'
import NavBar from './Components/NavBar/NavBar'
import Footer from './Components/Footer/Footer'

function App() {
    return (
        <div>
            <NavBar />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="merch" element={<Merch />} />
                <Route path="prints" element={<Prints />} />
                <Route path="originalart" element={<OriginalArt />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)
