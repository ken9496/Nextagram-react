
import React from 'react';
import { Button, Modal, ModalHeader, ModalFooter, ModalBody, } from 'reactstrap';
import Form from "./Login"
import { NavLink } from 'reactstrap';



class Modals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,

        };

        this.toggle = this.toggle.bind(this);

    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }





    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}Login</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Login</ModalHeader>
                    <ModalBody>
                        <Form />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Login</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>

                    <NavLink> Sign up here</NavLink>

                </Modal>


                {/* <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}SignUp</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>SignUp</ModalHeader>
                    <ModalBody>
                        <Forms />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Login</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal> */}



            </div>



        );
    }
}




export default Modals;