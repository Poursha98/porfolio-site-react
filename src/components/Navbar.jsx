import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className='navbar navbar-expand-lg bg-dark d-flex justify-content-center container-fluid'>
            <div className='toggleBtn'>
                <button></button>
            </div>
            <div className='Links navbar-brand '>
                <Link to='/'>Home</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/experience'>Experience</Link>
            </div>
        </div>
    )
}

export default Navbar
