import {Link} from 'react-router-dom'
import {Navbar,Nav} from "react-bootstrap";

function Navigation() {
    return (
        <div>
        <Navbar bg='dark' variant='dark' sticky='top' expand='sm' >
            <Navbar.Brand className='m-2'>
                LOGO
            </Navbar.Brand>
            <Navbar.Toggle className='me-4'/>
            <Navbar.Collapse>
                <Nav className='m-2'>
                    <Nav.Link>
                        <Link to='/' className='link-light text-decoration-none' >Home</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to='/projects' className='link-light text-decoration-none'>Projects</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to='/experience' className='link-light text-decoration-none'>Experience</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
        </div>

    )
}

export default Navigation
