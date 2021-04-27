import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

function Bar(){
    return(
        <header>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">UFRN - TADS</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Início</Nav.Link>
                        
                        <Nav.Link href="/calendario">Calendário</Nav.Link>
                        <Nav.Link href="#pricing">Notícias</Nav.Link>
                        <NavDropdown title="Ensino" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Currículos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Monografias</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Artigos</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Memoriais</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Turmas</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Outros</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/pp">Projeto Pedagógico do Curso</Nav.Link>
                        <NavDropdown title="Documentos" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/forms">Formulário</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Resolução</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/docs_outros">Outros</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Bar