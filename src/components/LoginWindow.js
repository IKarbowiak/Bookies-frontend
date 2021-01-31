import {Button, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'


export const LoginWindow = () => {
  return (
    <div className="Login">
      <div className="Header">
        <p>
          Login to Bookies
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
          <p>
            Don't have account? <Link to="/sign-in">Sing in!</Link>
          </p>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}