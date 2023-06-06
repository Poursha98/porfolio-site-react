import {Navbar, Nav} from "react-bootstrap";

function Navigation() {
    return (
        <div>
            <Navbar bg='dark' variant='dark' sticky='top' expand='sm'>
                <div className='container m-0'>
                    <Navbar.Brand className='m-1'>
                        LOGO
                    </Navbar.Brand>
                    <Navbar.Toggle className='me-4' />
                    <Navbar.Collapse >
                        <Nav className='mx-4 ms-2'>
                            <Nav.Link href='/'
                                      className='opacity-100 link-opacity-75-hover link-light text-decoration-none'>
                                Home
                            </Nav.Link>
                            <Nav.Link href='/projects'
                                      className='opacity-100 link-opacity-75-hover link-light text-decoration-none'>
                                Projects
                            </Nav.Link>
                            <Nav.Link href='/experience'
                                      className='opacity-100 link-opacity-75-hover link-light text-decoration-none'>
                                Experience
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>

    )
}

export default Navigation
