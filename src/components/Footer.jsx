import InstagramIcon from '@mui/icons-material/Instagram'
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';

function Footer() {
    return (
        <footer className='bg-dark text-light pt-5 pb-4 fixed-bottom'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>Contact me</div>
                    <div className='cok'>Email</div>
                    <div className='cok'>Privacy</div>
                </div>

                <div className='d-flex justify-content-center text-md-start'>
                    <div><InstagramIcon/></div>
                    <div><TelegramIcon/></div>
                    <div><CallIcon/></div>

                </div>
            </div>
        </footer>
    )
}

export default Footer
