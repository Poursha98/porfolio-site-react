import InstagramIcon from '@mui/icons-material/Instagram'
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className='bg-dark text-light pt-5 pb-4 fixed-bottom'>
            <div className='container'>
                <div className='row text-center mb-4'>
                    <Link to='/contact' className='col text-decoration-none text-light'>Contact us</Link>
                    <Link  to='/about' className='col text-decoration-none text-light'>About us</Link>
                    <Link  to='/gallery' className='col text-decoration-none text-light'>Gallery</Link>
                </div>
                <div className='d-flex justify-content-center text-md-start '>
                    <div><InstagramIcon/></div>
                    <div><TelegramIcon/></div>
                    <div><CallIcon/></div>
                </div>
                <div className='border border-1 mt-3 shadow-lg'></div>
                <p className='text-center mt-4 '>All the legal rights of ThisWebsite belongs to ThisWebsite</p>
            </div>
        </footer>
    )
}

export default Footer
