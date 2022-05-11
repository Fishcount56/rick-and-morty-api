import { Container, Row, Nav, Navbar} from 'react-bootstrap'
import './navbar.css'

const NavigationBar = () => {
    return (
        <Navbar bg='light' expand='lg'>
            <Container fluid>
                <Navbar.Brand href='#'>Rick & Morty</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link>Charater</Nav.Link>
                        <Nav.Link>Details</Nav.Link>
                        <Nav.Link>Location</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavigationBar