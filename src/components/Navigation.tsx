import { useQuery } from '@tanstack/react-query'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink, Link } from 'react-router-dom'
import useTheme from '../hooks/useTheme'
import TodosAPI from '../services/TodoAPI'
const Navigation = () => {
    const { data: todos, isSuccess } = useQuery({
        queryKey: ['todos'],
        queryFn: TodosAPI.getTodos
    })
    const { isDarkMode, toggleTheme } = useTheme()
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    📝 React Typescript Todos
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} end to="/todos">
                            Todos{' '}
                            {isSuccess && (
                                <Badge bg="primary">{todos.length}</Badge>
                            )}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button variant="outline-secondary" onClick={toggleTheme}>
                    {isDarkMode ? '☀️' : '🌙'}
                </Button>
            </Container>
        </Navbar>
    )
}

export default Navigation
