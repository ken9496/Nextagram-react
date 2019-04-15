import React from "react"
import 'react-bootstrap';
import { Navbar, NavbarBrand, } from 'reactstrap';
import Button from "./Modal"



class Navbars extends React.Component {



    render() {






        return (

            <div>
                <Navbar bg="light" variant="light">
                    <NavbarBrand href="">Nextagram</NavbarBrand><img alt="" />
                    <Button />
                </Navbar>


            </div>

        )
    }
}







export default Navbars