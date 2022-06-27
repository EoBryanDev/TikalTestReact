import './styles.css'
import { Link } from 'react-router-dom'
export const Button = ({ children }) =>{
    return(
    <button className='btn'><Link to="">{children}</Link></button>
)
}