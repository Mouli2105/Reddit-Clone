import React from 'react';
import Context from '../../provider'
import {
    Collapse,
    Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink,
    Form, FormGroup, Label, Input, Button,
} from 'reactstrap';
import LoginComponent from './LoginComponent'
import SignupComponent from './SignupComponent'

export default class NavbarComponent extends React.Component {
    render() {
        return (
            <Context.Consumer>
                {context => {
                    return (
                        <Navbar color="light" light expand="md" fixed="top">
                            <NavbarBrand href="/">Reddit</NavbarBrand>
                                <NavbarToggler onClick={() => context.toggleNavbar()} />
                                <Collapse isOpen={context.navbarOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem><LoginComponent /></NavItem>
                                    <NavItem><SignupComponent /></NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    )   
                }}
            </Context.Consumer>
        )
    }
}