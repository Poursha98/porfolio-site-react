import InstagramIcon from '@mui/icons-material/Instagram'
import TelegramIcon from '@mui/icons-material/Telegram';
function Footer() {
    return (
        <footer className='bg-dark text-light pt-5 pb-4'>
            <div className='container text-center text-md-start'>
                <div className='d-flex justify-content-center text-md-start'>
            <div><InstagramIcon/></div>
            <div><TelegramIcon/></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
