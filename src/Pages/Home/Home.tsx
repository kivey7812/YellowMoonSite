import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import './Home.scss'
interface Props {}

const Home: React.FC<Props> = (props) => {
    return (
        <div className="body">
            <div className="page-title">Yellow Moon Art</div>
        </div>
    )
}

export default Home
