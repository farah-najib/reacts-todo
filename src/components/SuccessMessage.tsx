import Alert from "react-bootstrap/Alert";

interface SuccessMessageProps {
    children: React.ReactNode //React.ReactNode, which is a common type that can be anything React can render.
    heading?: string //heading?: The ? means this property is optional. It will be a string if provided, but it doesn’t have to be included when using the component. If included, it’s used to show a heading at the top of the message.
}
//React.FC is the type definition for functional components (a function that returns JSX). in TypeScript
//const SuccessMessage = ({ children, heading }: SuccessMessageProps) =>  "This is also a valid way to type the props."
const SuccessMessage: React.FC<SuccessMessageProps> = ({ children, heading }) => {
	return (
        <Alert variant="success">
            {heading && <Alert.Heading>{heading}</Alert.Heading>}
            {/* If heading exists, it renders the Alert.Heading component with the heading text inside it */}
            {children}
        </Alert>
    )
}

export default SuccessMessage;
