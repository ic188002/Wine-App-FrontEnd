import React, {useState} from 'react'
import { Container, Form, Button} from "react-bootstrap"




export default function SignUp(props) {
    const [newUser, setNewUser] = useState({})
    const changeHandler = (e) => {
        const user = { ...newUser };
        user[e.target.name] = e.target.value;
        console.log(user);
        setNewUser(user);
    }

    const registerHandler = () => {
        props.register(newUser)
        }
  return (
    <div>
    <Container>
        <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control name='firstName' onChange={changeHandler}></Form.Control>
        </Form.Group>


        <Form.Group>
            <Form.Label>last Name</Form.Label>
            <Form.Control name='lastName' onChange={changeHandler}></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control name='emailAddress' onChange={changeHandler}></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" onChange={changeHandler}></Form.Control>
        </Form.Group>
    
        <Button  variant="light" onClick={registerHandler}>Register</Button>
 
    </Container></div>
  )
}
