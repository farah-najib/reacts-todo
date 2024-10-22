import Button from 'react-bootstrap/Button'
import useTheme from '../hooks/useTheme'
const HomePage = () => {
     const { isDarkMode, toggleTheme } = useTheme();
    return (
        <>
            <h1>Welcome to Better Todos!</h1>

            <p>
                “People don’t take anything seriously until it’s written down
                and becomes an actual part of their daily schedule. It might
                take you some time to get there but once that becomes a habit,
                you’ll end up getting all that you planned done simply because
                it’s part of your to-do list for the day.”
            </p>
            <Button onClick={toggleTheme} variant="primary">
                Toggle theme
            </Button>
        </>
    )
}

export default HomePage
