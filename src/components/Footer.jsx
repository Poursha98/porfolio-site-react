import InstagramIcon from '@mui/icons-material/Instagram'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import { Link } from 'react-router-dom'
import '../App.css'

function Footer() {
    return (
        <footer className='bg-dark text-light pt-5 pb-4 fixed-bottom'>
            <div className='container'>
                <div className='row text-center mb-4'>
                    <Link to='/contact' className='col text-light text-decoration-none '>Contact us</Link>
                    <Link  to='/about' className='col text-decoration-none text-light'>About us</Link>
                    <Link  to='/gallery' className='col text-decoration-none text-light'>Gallery</Link>
                </div>
                <div className='icons d-flex justify-content-center align-items-center '>
                    <Link className='icon mx-2 text-light' to='https://instagram.com/farhad.surving?igshid=MzRlODBiNWFlZA==' target='_blank'><InstagramIcon/></Link>
                    <Link className='icon mx-2 text-light' to='#'><WhatsAppIcon/></Link>
                    <Link className='icon mx-2 text-light' to='tel:+989122336'><CallIcon/></Link>
                </div>
                <div className='border border-1 mt-3 shadow-lg'></div>
                <p className='text-center mt-4 '>All the legal rights of ThisWebsite belongs to ThisWebsite</p>
            </div>
        </footer>
    )
}

export default Footer
