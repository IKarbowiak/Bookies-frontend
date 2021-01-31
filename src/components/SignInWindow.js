import React from 'react'
import {Button, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'


class SignInWindow extends React.Component {
  render() {
    return (
      <div className="Login">
        <div className="Header">
          <p>
            Sign in to the Bookies<br/>
            <span className="Description">...and start collecting best moments of the books</span>
          </p>
        </div>
        <div>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Repeat password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <p>
              Already have account? <Link to="/login">Login!</Link>
            </p>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default SignInWindow
