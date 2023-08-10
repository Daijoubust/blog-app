import './notfound.scss'
import notfound from '../../../assets/notfound.svg'

export const NotFound = () => {
    return (
        <div className='page-container pnf'>
            <h2>404 Page Not Found</h2>
            <img src={notfound} alt="notfound" />
        </div>
    )
}
