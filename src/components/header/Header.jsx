import './header.scss'
import { Link } from 'react-router-dom'
import { MdDarkMode , MdLightMode } from "react-icons/md";
import propTypes from 'prop-types'

export const Header = (props) => {
    const {theme,setTheme} = props

    const ToggleTheme = () => {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }
    return (
        <nav>
            <div className='logo'>
                <h1><Link to="/">DaijouBlog</Link></h1>
            </div>
            <div className='nav-container'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blogs">Blog</Link></li>
                </ul>
            </div>
            <div className="theme-container">
                <span className="icon" onClick={ToggleTheme}>{theme === "light" ? <MdLightMode/> : <MdDarkMode/>}</span>
            </div>
        </nav>
    )
}

Header.propTypes = {
    theme: propTypes.string.isRequired,
    setTheme: propTypes.func,
}
