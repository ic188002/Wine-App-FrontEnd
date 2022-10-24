import React, {useState} from 'react'
import { Container, Form, Button} from "react-bootstrap"


export default function Signin(props) {

    const [newUser, setNewUser] = useState({})

    const changeHandler = (e) => {
        const user = { ...newUser };
        user[e.target.name] = e.target.value;
        console.log(user);
        setNewUser(user);
    }

    const loginHandler = () => {
        props.login(newUser)
        }
  return (
    <div>
        <h1>signin</h1>
    <Container>
        <Form.Group>
            <Form.Label>Email Address</Form.Label>
            <Form.Control name='emailAddress' onChange={changeHandler}></Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' type="password" onChange={changeHandler}></Form.Control>
        </Form.Group>
        <div className='btn'>
        <Button className='btn' variant="light" onClick={loginHandler}>Login</Button>
        </div>
    </Container></div>
  )
}

