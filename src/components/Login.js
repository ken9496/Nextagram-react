

import React from "react"

import { Form, Row, Col, Label, Input, FormGroup } from "reactstrap"

class Login extends React.Component {
    states = {
        email: "",
        password: ""
    }

    handleSubmit = event => {
        event.preventDefault()

    }

    handleInput = event => {
        this.setState({ states: event.target.value })
    }

    render() {
        return (

            <Form>
                <Row form>

                    <Col md={6}>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="password" name="Email" id="examplePassword" placeholder="" />
                        </FormGroup>
                    </Col>
                    <Col md={6}>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="Password" id="examplePassword" placeholder="" />
                        </FormGroup>
                    </Col>
                </Row>

            </Form>

        )
    }
}
export default Login