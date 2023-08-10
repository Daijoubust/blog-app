import './home.scss'
import  home  from '../../../assets/home.svg'

export const Home = () => {
    return (
        <div className='page-container'>
            <h2 className='title'>First Page</h2>
            <img src={home} alt="home" />
        </div>
    )
}
