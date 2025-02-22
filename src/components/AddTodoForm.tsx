import { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import { CreateTodoPayload } from '../services/TodoAPI.types'

interface AddTodoFormProps {
    onAddTodo: (todo: CreateTodoPayload) => Promise<void>
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ onAddTodo }) => {
    const [newTodoTitle, setNewTodoTitle] = useState('')
    const newTodoTitleRef = useRef<HTMLInputElement>(null)

    const handleSubmit = async (e: React.FormEvent) => {
        // Stop form from submitting
        e.preventDefault()

        if (newTodoTitle.length < 2) {
            alert("That's too short to be a todo!")
            return
        }

        // Create payload
        const newTodo: CreateTodoPayload = {
            title: newTodoTitle,
            completed: false
        }

        // Pass the new todo to the parent
        await onAddTodo(newTodo)

        // Clear input field
        setNewTodoTitle('')
    }

    useEffect(() => {
        newTodoTitleRef.current?.focus()
    }, [])

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="What you got to do?"
                    aria-label="Title of the new todo"
                    onChange={(e) => setNewTodoTitle(e.target.value)}
                    ref={newTodoTitleRef}
                    value={newTodoTitle}
                />

                <Button
                    disabled={newTodoTitle.length < 2}
                    type="submit"
                    variant="success"
                >
                    Create
                </Button>
            </InputGroup>
        </Form>
    )
}

export default AddTodoForm
