import './about.scss'
import about from '../../../assets/about.svg'

export const About = () => {
    return (
        <div className='page-container'>
            <h2 className='title'>About</h2>
            <img src={about} alt="about" />
        </div>
    )
}
