
import React from "react"
import axios from "axios"
import { Col, Row, Form, FormGroup, Label, Input, } from 'reactstrap';
import NavLink from "react-bootstrap/NavLink";


class SignUp extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",

    }



    componentDidMount() {
        axios.get({
            method: 'POST',
            url: 'https://insta.nextacademy.com/api/v1/users/',
            data: {
                username: this.setState.username,
                email: this.setState.email,
                password: this.setState.password,
            }
        })
            .then(response => {
                console.log(response)
            })
    }



    handleError = event => {
        this.setState({
            "message": "Successfully created a user and signed in.",
            "status": "success",
            "user": {
                "id": 0,
                "username": "Test User"
            }
        })

    }





    render() {





        return (
            <NavLink>
                <Form>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleUserName"> UserName</Label>
                                <Input type="Username" name="userName" id="exampleUserName" placeholder="" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="password" name="email" id="examplePassword" placeholder="" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="" />
                            </FormGroup>
                        </Col>
                    </Row>

                </Form>
            </NavLink>
        );
    }
}
export default SignUp